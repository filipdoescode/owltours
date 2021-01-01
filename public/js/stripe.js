import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51I4605Jqvf01daB91HgQkb7oESMwZKIYJUqlAccVbCWreJHzBH8WeraCdapVQIhHTz3jIMfdoawgWuhJReDBa50P005WHxFvTM'
);

export const bookTour = async (tourId) => {
  try {
    // 1) get checkout session form API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
