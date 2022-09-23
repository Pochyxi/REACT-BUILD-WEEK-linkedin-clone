import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { BiPencil } from 'react-icons/bi'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';




export default function FormDialogModifyPost({ post, fetchPosts }) {
    const user = useSelector(state => state.user.user)
    const token = useSelector(state => state.user.token)
    const [open, setOpen] = React.useState(false);
    const [postSingle, setPostSingle] = React.useState({
        text: post.text
    })

    const modifyPost = async (obj) => {
        const baseEndpoint = `https://striveschool-api.herokuapp.com/api/posts/${post._id}`

        const header = {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        };

        try {
            const response = await fetch(baseEndpoint, {
                method: "PUT",
                body: JSON.stringify(obj),
                headers: header,
            });
            if (response.ok) {
                const data = await response.json();
                fetchPosts()
                console.log(data);
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const formValidation = () => {
        let validation = false
        if (postSingle.text.length > 0) {
            validation = true
        }
        return validation
    }

    const handlePost = (key, value) => {
        setPostSingle(form => {
            return {
                ...form,
                [key]: value
            }

        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    console.log(post)
    return (
        <div>
            <MenuItem onClick={handleClickOpen}>
                Modifica
            </MenuItem>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className='text-dark text-center'>MODIFICA COMPETENZA</DialogTitle>
                <DialogContent>
                    <DialogContentText className='text-center'>
                        Modifica i campi e premi su conferma, annullando verranno ripristinati i campi precedenti
                    </DialogContentText>
                    <TextField
                        autoFocus
                        className='mt-3'
                        id="outlined-multiline-flexible"
                        label="Mansione svolta"
                        multiline
                        rows={5}
                        value={postSingle.text}
                        onChange={(e) => { handlePost('text', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                </DialogContent>
                <DialogActions className='d-flex justify-content-between'>
                    <Button className='text-primary' onClick={() => {
                        handleClose()
                        setPostSingle({
                            text: post.text
                        })
                    }}>ANNULLA</Button>
                    <Button
                        className={formValidation() ? 'text-success' : 'text-secondary'}
                        disabled={!formValidation()}
                        onClick={() => {
                            handleClose()
                            modifyPost(postSingle)
                        }}>CONFERMA</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}
