import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";
import { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type listFilm = {
    id: number;
    image: string;
    detailImg: string;
    clip: string;
    description: string;
    title: string;
    year: string;
    nation: string;
};

export default function Dashboard() {
    const [listfilm, setListfilm] = useState<listFilm[]>([]);

    async function getListfilm() {
        try {
            // 👇️ const data: getListfilmResponse
            await axios
                .get<listFilm[]>(
                    "https://65080adf56db83a34d9ba1e0.mockapi.io/api/v1/movies",
                    {
                        headers: {
                            Accept: "application/json",
                        },
                    }
                )
                .then((response) => {
                    setListfilm(response.data);
                });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("error message: ", error.message);
                return error.message;
            } else {
                console.log("unexpected error: ", error);
                return "An unexpected error occurred";
            }
        }
    }

    useEffect(() => {
        getListfilm();
    }, []);
    //delete
    const [open, setOpen] = useState(false);
    function Deletefilm(id: number | undefined) {
        try {
            setOpen(false);
            // 👇️ const data: getListfilmResponse
            axios
                .delete(
                    `https://65080adf56db83a34d9ba1e0.mockapi.io/api/v1/movies/${id}`
                )
                .then((response) => {
                    getListfilm();
                });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("error message: ", error.message);
                return error.message;
            } else {
                console.log("unexpected error: ", error);
                return "An unexpected error occurred";
            }
        }
    }
    //add new movie
    const [id, setId] = useState<number>();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [nation, setNation] = useState("");
    const [year, setYear] = useState("");
    const [detailImg, setDetailImg] = useState("");
    const [clip, setClip] = useState("");
    const [image, setImage] = useState("");
    const [success, setSuccess] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAddMovie = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        try {
            // 👇️ const data: CreateUserResponse
            const { data, status } = await axios.post<listFilm[]>(
                "https://65080adf56db83a34d9ba1e0.mockapi.io/api/v1/movies",
                {
                    title: title,
                    image: image,
                    detailImg: detailImg,
                    clip: clip,
                    description: description,
                    year: year,
                    nation: nation,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            getListfilm();
            setSuccess("Add movie success");
            console.log(JSON.stringify(data, null, 4));
            console.log(status);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("error message: ", error.message);
                // 👇️ error: AxiosError<any, any>
                return error.message;
            } else {
                console.log("unexpected error: ", error);
                return "An unexpected error occurred";
            }
        }
    };

    return (
        <>
            <TableContainer component={Paper}>
                <h3>List of movies</h3>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Movie Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Year&nbsp;</TableCell>
                            <TableCell>Nation&nbsp;</TableCell>
                            <TableCell>Image&nbsp;</TableCell>
                            {/* <TableCell>Detail Image&nbsp;</TableCell>
                        <TableCell>Clip&nbsp;</TableCell> */}
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listfilm.map((row) => (
                            // <Row key={row.name} row={row} />
                            <TableRow
                                sx={{ "& > *": { borderBottom: "unset" } }}
                            >
                                <TableCell></TableCell>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.year}</TableCell>
                                <TableCell>{row.nation}</TableCell>
                                <TableCell>{row.image}</TableCell>
                                <TableCell>
                                    <Link to={`/edit/${row.id}`}>
                                        <SettingsIcon
                                            style={{
                                                color: "purple",
                                                cursor: "pointer",
                                            }}
                                        />
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Tooltip title="Delete">
                                        <IconButton>
                                            <DeleteIcon
                                                style={{
                                                    color: "red",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => {
                                                    setId(row.id);
                                                    setOpen(true);
                                                }}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                    {/* <DeleteForeverIcon style={{ color: "red", cursor: "pointer" }} onClick={() => Deletefilm(row.id)} /> */}
                                </TableCell>
                                {/* <TableCell>{row.detailImg}</TableCell>
                            <TableCell>{row.clip}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure you want to delete this movie"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            We will permanently delete this movie from your API
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={() => Deletefilm(id)} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </TableContainer>
            <div className="row">
                <h3>Add new movie </h3>
                <form onSubmit={handleAddMovie} className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <input
                                id="title"
                                type="text"
                                className="validate"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {/* <p style={{color : "red"}}>Please input movie's title</p> */}
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s4">
                            <input
                                id="nation"
                                type="text"
                                className="validate"
                                required
                                value={nation}
                                onChange={(e) => setNation(e.target.value)}
                            />
                            <label htmlFor="last_name">Nation</label>
                        </div>
                        <div className="input-field col s4">
                            <input
                                id="year"
                                type="number"
                                className="validate"
                                required
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                            <label htmlFor="text">Release Year</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="description"
                                type="text"
                                className="validate"
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <label htmlFor="phone">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="image"
                                type="text"
                                className="validate"
                                required
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <label htmlFor="text"> Image</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="detailImg"
                                type="text"
                                className="validate"
                                required
                                value={detailImg}
                                onChange={(e) => setDetailImg(e.target.value)}
                            />
                            <label htmlFor="text">Detail Image</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="clip"
                                type="text"
                                className="validate"
                                required
                                value={clip}
                                onChange={(e) => setClip(e.target.value)}
                            />
                            <label htmlFor="text"> Clip</label>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        disableElevation
                        className="purple darken-3"
                    >
                        Add Movie
                    </Button>
                    <h4 style={{ color: "purple" }}>{success}</h4>
                </form>
            </div>
        </>
    );
}
