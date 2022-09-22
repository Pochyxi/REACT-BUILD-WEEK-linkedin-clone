import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { BiPencil } from 'react-icons/bi'
import TextField from '@mui/material/TextField';



export default function FormDialogModify({ experience, fetchExperiences, deleteToggle }) {
    const user = useSelector(state => state.user.user)
    const token = useSelector(state => state.user.token)
    const [open, setOpen] = React.useState(false);
    const [experienceSingle, setExperienceSingle] = React.useState(experience)

    const modifyExperience = async (obj) => {
        const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/" + user._id + "/experiences/" + experience._id

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
                fetchExperiences()
                console.log(data);
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleExperience = (key, value) => {
        setExperienceSingle(form => {
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
    console.log(experience)
    return (
        <>
            {
                deleteToggle && (
                    <BiPencil
                        onClick={handleClickOpen} />
                )
            }

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
                        value={experienceSingle.description}
                        onChange={(e) => { handleExperience('description', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Località in cui lavori o hai lavorato"
                        type="text"
                        value={experienceSingle.area}
                        onChange={(e) => { handleExperience('area', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Ruolo ricoperto"
                        type="email"
                        value={experienceSingle.role}
                        onChange={(e) => { handleExperience('role', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Azienda per cui lavori o hai lavorato"
                        type="text"
                        value={experienceSingle.company}
                        onChange={(e) => { handleExperience('company', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        className='mt-4'
                        id="outlined-helperText"
                        helperText="INIZIO"
                        type="date"
                        value={experienceSingle.startDate.substring(0, 10)}
                        onChange={(e) => { handleExperience('startDate', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        className='mt-4'
                        id="outlined-helperText"
                        helperText="FINE"
                        type="date"
                        value={experienceSingle.endDate.substring(0, 10)}
                        onChange={(e) => { handleExperience('endDate', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                </DialogContent>
                <DialogActions className='d-flex justify-content-between'>
                    <Button className='text-primary' onClick={() => {
                        handleClose()
                        setExperienceSingle(experience)
                    }}>ANNULLA</Button>
                    <Button
                        className='text-success'
                        onClick={() => {
                            handleClose()
                            modifyExperience(experienceSingle);
                        }}>CONFERMA</Button>
                </DialogActions>
            </Dialog>
        </>

    );
}
