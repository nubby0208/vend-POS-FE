import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import "./sell.css"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
     '& .MuiDialogContent-root': {
       padding: theme.spacing(4),
     },
     '& .MuiDialogActions-root': {
       padding: theme.spacing(1),
     },
}));
   
const BootstrapDialogTitle = (props) => {
     const { children, onClose, ...other } = props;
   
     return (
          <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
          {children}
          {onClose ? (
               <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                         position: 'absolute',
                         right: 8,
                         top: 8,
                         color: (theme) => theme.palette.grey[500],
                    }}
                    >
                    <CloseIcon />
               </IconButton>
          ) : null}
          </DialogTitle>
     );
};
   
BootstrapDialogTitle.propTypes = {
     children: PropTypes.node,
     onClose: PropTypes.func.isRequired,
};

const CashManagement = () => {
     const [open, setOpen] = useState(false);

     const handleClickOpen = () => {
          setOpen(true);
     };
     const handleClose = () => {
          setOpen(false);
     };

     return(
          <div className='OpenClose'>
               <div>
                    <h2>Status</h2>
               </div>
               <div className='statusHeader'>
                    <h5>Reset local data</h5>
                    <p>We keep a copy of some of your store data in your web browser so you can keep selling if you lose your Internet connection. Sometimes, this gets out of sync. Resetting it can help if you're having trouble with Lightspeed Retail.</p>
                    <Button onClick={handleClickOpen} className='customButton'>Reset Data</Button>
               </div>

               <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open} >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                         Are you sure you want to reset data?
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                         <Typography gutterBottom>
                              Resetting your data deletes:
                         </Typography>
                         <Typography gutterBottom>
                              <ul>
                                   <li>The sale you're currently working on</li>
                                   <li>Any completed sales that haven’t yet been saved to our servers</li>
                                   <li>The copy of your Web Register data saved in your browser (we'll re-sync this with the latest version)</li>
                              </ul>
                         </Typography>
                         <Typography gutterBottom>
                              Before resetting your data, check your sales history to make sure your most recent sales have been saved. Do not reset data if they do not appear.
                         </Typography>
                    </DialogContent>
                    <DialogActions>
                         <Button onClick={handleClose} color='info' variant='outlined' >Cancel</Button>
                         <Button autoFocus className='customButton'>
                              Reset Data
                         </Button>
                    </DialogActions>
               </BootstrapDialog>
          </div>
     )
}
export default CashManagement;
