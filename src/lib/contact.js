export const WHATSAPP_NUMBER = "919430328262";
export const CALL_NUMBERS = ["9308104898", "9430328262"];

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telLink(number) {
  return `tel:+91${number}`;
}

export const WA_MESSAGES = {
  hero: "Namaste, I would like to enquire about Pind Daan in Gaya Ji during Pitru Paksha 2026.",
  booking: "Namaste, I would like to book Pind Daan in Gaya Ji for Pitru Paksha 2026.",
  floating: "Namaste, I would like to know more about your Pind Daan services in Gaya Ji.",
  general: "Namaste, I would like to know about Pind Daan booking in Gaya Ji for Pitru Paksha 2026.",
};
