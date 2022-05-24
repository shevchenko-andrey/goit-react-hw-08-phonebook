import toast from 'react-hot-toast';
function showToastError(error) {
  toast.error(error, {
    position: 'botton-center',
    style: {
      marginTop: '10px',
      minWidth: '250px',
      color: '#000000',
      backgroundColor: '#f5b780',
    },
  });
}

export default showToastError;
