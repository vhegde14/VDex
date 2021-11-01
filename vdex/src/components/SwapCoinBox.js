import { FormControl, Button, Modal, Box, Typography, TextField } from "@mui/material";
import * as React from 'react';

function SwapCoinBox(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <div position="relative">
            <FormControl fullWidth sx={{
                width: "460px",
                height: "100px",
                marginTop: "30px",
                marginLeft: "50px",
                marginRight: "50px",
                marginBottom: "50px",
                backgroundColor: "#6C6C6C",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                boxShadow: "8px 8px 4px rgba(0, 0, 0, 0.25)",
                flexDirection: "row",
            }}>
                <Button onClick={handleOpen} sx={{
                    marginLeft: "10px",
                    color: "#ffffff"
                }}>{props.label}</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                        alignSelf: "center",
                    }}
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        backgroundColor: '#171717',
                        color: 'white',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            ETH
                            BTC
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
                <TextField id="coin-amount" label="Amount" variant="filled" style={{ color: "#ffffff" }}
                    sx={{
                        alignSelf: "center",
                        display: "flex",
                        alignItems: "flex-end",
                        marginLeft: "auto",
                        marginRight: "20px"
                    }}
                />
            </FormControl>
        </div>
    );
}

export default SwapCoinBox;