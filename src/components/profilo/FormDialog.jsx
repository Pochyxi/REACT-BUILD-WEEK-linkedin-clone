import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Col } from 'react-bootstrap';
import { BiPencil } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions/actions';
import AlertComponent from "../AlertComponent"

export default function FormDialog() {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const token = useSelector(state => state.user.token)
    const [open, setOpen] = React.useState(false);
    const [formObj, setFormObj] = React.useState(user)
    const [opeN, setOpeN] = React.useState(false)
    const [mess, setMess] = React.useState(' ')

    React.useEffect(() => {
        setFormObj(user)
    }, [user])

    const handleClick = () => {
        setOpeN(true);
    };

    const formValidation = () => {
        let validation = false
        if (formObj.area.length > 0 &&
            formObj.bio.length > 0 &&
            formObj.email.length > 0 &&
            formObj.image.length > 0 &&
            formObj.surname.length > 0 &&
            formObj.title.length > 0 &&
            formObj.name.length > 0) {
            validation = true
        }
        return validation
    }
    const modifyUser = async (token, obj) => {
        const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/"
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
                dispatch(setUser(data));
                console.log(data);
            } else {
                setMess('Qualcosa è andato storto durante la modifica, riprovare grazie')
                handleClick()
            }
        } catch (error) {
            setMess('Errore del server' + error.message)
            handleClick()
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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Col xs={12} className='d-flex justify-content-end text-end p-3'>
            <Col xs={3}
                onClick={handleClickOpen}
                className='CardProfilePencil text-secondary'>
                <BiPencil />
            </Col>
            <AlertComponent open={opeN} setOpen={setOpeN} mess={mess} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>PROFILO</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Le tue informazioni
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        value={formObj.name}
                        onChange={(e) => { handleForm('name', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Surname"
                        type="text"
                        value={formObj.surname}
                        onChange={(e) => { handleForm('surname', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        value={formObj.email}
                        onChange={(e) => { handleForm('email', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Job Title"
                        type="text"
                        value={formObj.title}
                        onChange={(e) => { handleForm('title', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="About"
                        type="text"
                        value={formObj.bio}
                        onChange={(e) => { handleForm('bio', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Town, Region, Country"
                        type="text"
                        value={formObj.area}
                        onChange={(e) => { handleForm('area', e.target.value); }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="image"
                        type="text"
                        value={formObj.image}
                        onChange={(e) => { handleForm('image', e.target.value); }}
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
                            modifyUser(token, formObj);
                        }

                    }}>CONFERMA</Button>
                </DialogActions>
            </Dialog>
        </Col>
    );
}
