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


export default function FormDialogDelete({ experience, fetchExperiences, deleteToggle }) {
    const user = useSelector(state => state.user.user)
    const token = useSelector(state => state.user.token)
    const [open, setOpen] = React.useState(false);

    const deleteExperience = async () => {
        const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${experience._id}`
        const header = {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        };

        try {
            const response = await fetch(baseEndpoint, {
                method: "DELETE",
                headers: header,
            });
            if (response.ok) {
                fetchExperiences()
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    console.log(token)
    return (
        <Col xs={12} className='d-flex justify-content-end text-end p-3'>
            {
                deleteToggle && (
                    <Col xs={3}
                        onClick={handleClickOpen}
                        className='CardProfilePencil text-danger'>
                        <ClearIcon />
                    </Col>
                )
            }

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className='text-danger text-center'>ATTENZIONE</DialogTitle>
                <DialogContent>
                    <DialogContentText className='text-center'>
                        Questa azione è irreversibile <br />
                        Sei sicuro?
                    </DialogContentText>
                </DialogContent>
                <DialogActions className='d-flex justify-content-between'>
                    <Button className='text-success' onClick={handleClose}>NO, ANNULLA</Button>
                    <Button
                        className='text-danger'
                        onClick={() => {
                            handleClose()
                            deleteExperience();
                        }}>SI, CONFERMA</Button>
                </DialogActions>
            </Dialog>
        </Col>
    );
}
