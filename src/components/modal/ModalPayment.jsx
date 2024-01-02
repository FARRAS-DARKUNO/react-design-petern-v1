import {
    Modal,
    Typography,
    Stack,
} from "@mui/material"
import FlatButtonForm from '../button/FlatButtonForm'
import BorderButtomForm from '../button/BorderButtomForm'
import PropTypes from "prop-types";
import { imageUrl } from "../../utils/imageUrl";
import { useState } from "react";
import { Link } from "react-router-dom";

const ModalPaymanet = (Props) => {

    const [isIndex, setIndex] = useState(null)

    return (
        <Modal
            open={Props.open}
            onClose={Props.handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Stack left={'50%'} top={'50%'} alignItems={'center'} position={'absolute'} width={'350px'} borderRadius={5} bgcolor={'white'} boxShadow={24} padding={'15px'} sx={{
                transform: 'translate(-50%, -50%)'
            }}>
                <Typography color={'black'} variant="h5" marginBottom={'20px'}>
                    Select Payment Method
                </Typography>
                {
                    Props.data.map((data, index) => {
                        return (
                            <Link
                                key={index}
                                style={{ textDecoration: "none" }}
                                onClick={() => {
                                    setIndex(index)
                                    Props.setId(data.id)
                                }}
                            >
                                <Stack flexDirection={'row'} alignItems={'center'} width={'350px'} marginBottom={'15px'} sx={{backgroundColor : isIndex == index ? "Highlight" : "none"}}>
                                    <img src={imageUrl + data.image} alt="Smiley face" style={{ height: 50, width: 50 }} />
                                    <Typography color={'black'} variant="h5" marginLeft={'15px'} >
                                        {data.name}
                                    </Typography>
                                </Stack>
                            </Link>
                        )
                    })
                }
                <Stack flexDirection={'row'} justifyContent={'space-between'}>
                    <BorderButtomForm title={'Cancle'} action={Props.handleClose} />
                    <FlatButtonForm title={'Pay Now'} action={Props.action}/>
                </Stack>
            </Stack>
        </Modal>
    )
};

ModalPaymanet.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    data: PropTypes.array,
    action : PropTypes.func.isRequired,
    setId : PropTypes.func.isRequired,
};

export default ModalPaymanet