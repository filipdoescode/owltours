import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51I4605Jqvf01daB91HgQkb7oESMwZKIYJUqlAccVbCWreJHzBH8WeraCdapVQIhHTz3jIMfdoawgWuhJReDBa50P005WHxFvTM'
);

export const bookTour = async (tourId) => {
  try {
    // 1) get checkout session form API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
