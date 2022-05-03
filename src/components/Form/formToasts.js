import toast from 'react-hot-toast';
export const showPromiseToast = response => {
  toast.promise(
    response,
    {
      loading: 'Creating a contact',
      success: 'Successfully created!',

      error: 'Opps, something wrong, try again',
    },
    {
      position: 'top-right',

      style: {
        marginTop: '10px',
        minWidth: '250px',
        color: '#000000',
        backgroundColor: '#f5b780',
      },
      success: {
        duration: 5000,

        icon: '🔥',
      },
    }
  );
};

export const showErrorToast = name => {
  toast.error(`${name} is already in contacts`, {
    position: 'top-right',

    style: {
      marginTop: '10px',
      minWidth: '250px',
      color: '#000000',
      backgroundColor: '#f5b780',
    },
  });
};
