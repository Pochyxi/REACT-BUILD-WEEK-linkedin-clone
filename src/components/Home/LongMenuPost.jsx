import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FormDialogModifyPost from './FormDialogModifyPost';
import { Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;

export default function LongMenuPost(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const token = useSelector(state => state.user.token)
    const user = useSelector(state => state.user.user)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const deletePost = async () => {
        const baseEndpoint = `https://striveschool-api.herokuapp.com/api/posts/${props.post._id}`
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
                props.fetchPosts()
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    }


    console.log(props.post)
    console.log('id', props.post.user._id);
    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon
                    sx={{
                        transform: 'rotate(90deg)',
                    }} />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <Link to={'/profili/' + props.post.user._id}>
                    <MenuItem onClick={handleClose}>
                        Visualizza Profilo
                    </MenuItem>
                </Link>
                {
                    props.post.user._id === user._id && (
                        <div>
                            <FormDialogModifyPost post={props.post} fetchPosts={props.fetchPosts} />
                            <MenuItem onClick={() => {
                                deletePost()
                                handleClose();
                            }
                            }>
                                Elimina
                            </MenuItem>
                        </div>

                    )
                }

            </Menu>
        </div>
    );
}
