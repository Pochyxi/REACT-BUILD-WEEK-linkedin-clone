import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


export default function FormDialogPost({ fetchPosts }) {
    const token = useSelector(state => state.user.token)
    const [open, setOpen] = useState(false);
    const [formObj, setFormObj] = useState({
        text: '',
    })


    const addPost = async (obj) => {
        const baseEndpoint = "https://striveschool-api.herokuapp.com/api/posts/"

        const header = {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        };

        try {
            const response = await fetch(baseEndpoint, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: header,
            });
            if (response.ok) {
                const data = await response.json();
                setFormObj({
                    text: '',
                })
                fetchPosts()
                console.log(data);
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleForm = (key, value) => {
        setFormObj(form => {
            return {
                ...form,
                [key]: value
            }

        })
    }
    const formValidation = () => {
        let validation = false
        if (formObj.text.length > 0) {
            validation = true
        }
        return validation
    }

    // const handleExperience = (key, value) => {
    //     setExperienceObj(form => {
    //         return {
    //             ...form,
    //             [key]: value
    //         }

    //     })
    // }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleClickOpen} variant="outline-secondary" className="buttonPost" >
                Crea Post
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>COMPETENZE</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Raccontaci le tue esperienze lavorative
                    </DialogContentText>
                    <TextField
                        autoFocus
                        className='mt-3'
                        id="outlined-multiline-flexible"
                        label="Mansione svolta"
                        multiline
                        rows={5}
                        value={formObj.text}
                        onChange={(e) => { handleForm('text', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ANNULLA</Button>
                    <Button onClick={() => {
                        if (formValidation() === true) {
                            handleClose()
                            addPost(formObj)
                        }

                    }}>CONFERMA</Button>
                </DialogActions>
            </Dialog>
        </>

    );
}
