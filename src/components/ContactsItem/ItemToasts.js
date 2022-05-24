import { toast } from 'react-hot-toast';
export const showDeletingToast = response => {
  toast.promise(
    response,
    {
      loading: 'Deleting a contact',
      success: 'Successfully deleted!',

      error: 'Opps, something wrong, try again',
    },
    {
      position: 'botton-center',

      style: {
        marginTop: '10px',
        minWidth: '250px',
        color: '#ffffff',
        backgroundColor: '#4f8f2a',
      },
      success: {
        duration: 5000,

        icon: '🔥',
      },
    }
  );
};
