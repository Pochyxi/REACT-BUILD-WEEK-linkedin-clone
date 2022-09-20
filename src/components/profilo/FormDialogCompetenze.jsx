import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Col } from 'react-bootstrap';
import { BiPlus, BiPencil } from 'react-icons/bi'
import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';


export default function FormDialogCompetenze({ experienceObj, setExperienceObj, addExperience, setDeleteToggle, deleteToggle }) {
    const user = useSelector(state => state.user.user)
    const location = useLocation()
    const token = useSelector(state => state.user.token)
    const [open, setOpen] = useState(false);
    const [formObj, setFormObj] = useState(user)


    useEffect(() => {
        setFormObj(user)
    }, [user])

    const formValidation = () => {
        let validation = false
        if (experienceObj.description.length > 0 &&
            experienceObj.area.length > 0 &&
            experienceObj.role.length > 0 &&
            experienceObj.company.length > 0 &&
            experienceObj.startDate.length > 0 &&
            experienceObj.endDate.length > 0) {
            validation = true
        }
        return validation
    }
    const handleExperience = (key, value) => {
        setExperienceObj(form => {
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
    console.log(experienceObj)
    console.log(formValidation())
    return (
        <Col xs={12} className='d-flex justify-content-between align-items-center text-end mb-2'>
            <Col xs={4}>
                <h4>Competenze</h4>
            </Col>
            <Col xs={3}
                className='CardProfilePencil text-secondary d-flex justify-content-between align-items-center'>
                <BiPlus onClick={handleClickOpen} />
                <Col xs={3}>
                    {
                        location.pathname === '/profile' ? (
                            <Link to='/modify'>
                                <BiPencil className="CardProfilePencil text-secondary " />
                            </Link>
                        ) : (
                            <BiPencil
                                onClick={() => {
                                    setDeleteToggle(!deleteToggle)
                                }}
                                className={!deleteToggle ? "CardProfilePencil text-secondary " : "CardProfilePencil text-danger "} />
                        )
                    }
                </Col>
            </Col>

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
                        value={experienceObj.description}
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
                        value={experienceObj.area}
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
                        value={experienceObj.role}
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
                        value={experienceObj.company}
                        onChange={(e) => { handleExperience('company', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        className='mt-4'
                        id="outlined-helperText"
                        defaultValue="Default Value"
                        helperText="INIZIO"
                        type="date"
                        value={experienceObj.startDate}
                        onChange={(e) => { handleExperience('startDate', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        className='mt-4'
                        id="outlined-helperText"
                        defaultValue="Default Value"
                        helperText="FINE"
                        type="date"
                        value={experienceObj.endDate}
                        onChange={(e) => { handleExperience('endDate', e.target.value); }}
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
                            addExperience(experienceObj)
                        }

                    }}>CONFERMA</Button>
                </DialogActions>
            </Dialog>
        </Col>
    );
}
