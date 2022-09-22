import { Button, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { BsThreeDots } from 'react-icons/bs'
import { BiPencil } from 'react-icons/bi'
import FormDialog from "./FormDialog"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useEffect, useState } from "react"
import { fetchUser } from "../../redux/actions/actions"



const CardProfile = () => {
    const [blobFile, setBlobFile] = useState(null)
    const token = useSelector(state => state.user.token)
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (blobFile?.name.length > 0) {
            fetchImg()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blobFile])

    const fetchImg = async () => {

        const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${user._id}/picture`

        try {
            let formData = new FormData();
            formData.append('profile', blobFile);
            const response = await fetch(baseEndpoint, {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                dispatch(fetchUser(token))
                console.log('okok')
                console.log(data);
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Col className='CardProfile'>
            <Col className="CardProfileImages" xs={12} >
                <Col className="text-end d-flex justify-content-between align-items-center  CardProfileImagesPencil" xs={12}>
                    <Col xs={6} className='text-start'>
                        <form encType="multipart/form-data" id='form'>
                            <label htmlFor="input"><ImageOutlinedIcon className="text-dark" /></label>
                            <input
                                onChange={(e) => {
                                    setBlobFile(e.target.files[0])
                                }}
                                style={{ display: 'none' }} type="file" id="input" />
                        </form>
                    </Col>
                    <Col xs={6}>
                        <BiPencil className="bg-light CardProfileImagesPenciBi" />
                    </Col>


                </Col>
                <Col xs={3} className='CardProfileCerchio d-flex align-items-end'>
                    <img className="img-fluid CardProfileCerchioImg" src={user.image} alt="" />

                </Col>
            </Col>
            <FormDialog />
            <Col xs={12} className='CardProfileText'>
                <h3>{user.name} {user.surname}</h3>
                <p>{user.title}</p>
                <p className="text-secondary">{user.area}{' '}<span className="text-primary">informazioni di contatto</span> </p>
            </Col>
            <Col xs={12} className='d-flex justify-content-evenly '>
                <Col xs={3}>
                    <Button variant='primary CardProfileButton1' >Disponibile per</Button>
                </Col>
                <Col xs={5}>
                    <Button variant='light' className="text-primari CardProfileButton2" >Aggiungi sezione del profilo</Button>
                </Col>
                <Col xs={2}>
                    <Button variant='light' className="text-secondary CardProfileButton3" ><BsThreeDots /></Button>
                </Col>
            </Col>
            <Col xs={12} className='d-flex justify-content-start p-4'>
                <Col className="CardProfileDisp" xs={8}>
                    <h6 className="m-0">Disponibile a lavorare</h6>
                    <p className="m-0">Ruoli di {user.title}</p>
                    <p className="text-primary m-0">Vedi informazioni di contatto</p>
                </Col>
            </Col>
        </Col>
    )
}

export default CardProfile
