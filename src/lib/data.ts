export const WHATSAPP_NUMBER = '2250502354176';

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  'Bonjour Maison Lumière, je souhaite commander une paire de chaussures.';

export interface Product {
  id: number;
  name: string;
  price: string;
  priceNum: number;
  image: string;
  tag: string;
  desc: string;
  tone: string; // accent tint sampled from the photo
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Asics Gel Kayano 14',
    price: '20 000 FCFA',
    priceNum: 20000,
    image: '/images/sneaker-1.jpg',
    tag: 'Best-seller',
    desc: 'Silhouette rétro-running gris perle & crème. Le confort technique sublimé.',
    tone: '#9aa3ad',
  },
  {
    id: 2,
    name: 'New Balance 530',
    price: '18 000 FCFA',
    priceNum: 18000,
    image: '/images/sneaker-2.jpg',
    tag: 'Intemporel',
    desc: 'Le blanc argenté qui va avec tout. Élégance discrète, allure assurée.',
    tone: '#c8bca8',
  },
  {
    id: 3,
    name: 'Nike Air Max DN',
    price: '20 000 FCFA',
    priceNum: 20000,
    image: '/images/sneaker-3.jpg',
    tag: 'Nouveauté',
    desc: 'Noir total, lignes futuristes. La pièce statement de la saison.',
    tone: '#4a4744',
  },
  {
    id: 4,
    name: 'Adidas Campus 00s',
    price: '18 000 FCFA',
    priceNum: 18000,
    image: '/images/sneaker-4.jpg',
    tag: 'Tendance',
    desc: 'Daim noir, trois bandes blanches, semelle gomme. L\u2019icône streetwear.',
    tone: '#2d2a27',
  },
];

export const stats = [
  { value: '500+', label: 'Clients satisfaits' },
  { value: '4', label: 'Modèles disponibles' },
  { value: '24h', label: 'Réponse WhatsApp' },
  { value: '100%', label: 'Produits authentiques' },
];

export const reviews = [
  {
    name: 'Koffi A.',
    city: 'Cocody, Abidjan',
    photo: 'https://i.pravatar.cc/120?img=12',
    text: 'Qualité au rendez-vous et livraison rapide. Les Asics sont magnifiques, exactement comme sur les photos !',
    rating: 5,
  },
  {
    name: 'Aminata D.',
    city: 'Riviera',
    photo: 'https://i.pravatar.cc/120?img=45',
    text: 'Service client impeccable sur WhatsApp, réponse en quelques minutes. Je recommande à 100%.',
    rating: 5,
  },
  {
    name: 'Yann K.',
    city: 'Yopougon',
    photo: 'https://i.pravatar.cc/120?img=33',
    text: 'Mes Nike Air Max DN sont parfaites. Le rapport qualité-prix est tout simplement imbattable.',
    rating: 5,
  },
  {
    name: 'Fatou S.',
    city: 'Marcory',
    photo: 'https://i.pravatar.cc/120?img=47',
    text: 'Très satisfaite de mes New Balance. Emballage soigné, produit authentique. Merci Maison Lumière !',
    rating: 5,
  },
  {
    name: 'Ibrahim T.',
    city: 'Treichville',
    photo: 'https://i.pravatar.cc/120?img=15',
    text: 'Une vraie maison de confiance. Les Adidas Campus sont superbes, je ne porte plus que ça.',
    rating: 5,
  },
  {
    name: 'Mariam B.',
    city: 'Plateau',
    photo: 'https://i.pravatar.cc/120?img=20',
    text: 'Commande validée et reçue en un temps record. Maison Lumière, c\u2019est du sérieux !',
    rating: 5,
  },
];

export interface ShortVideo {
  id: string;
  title: string;
  thumb: string;
}

export const youtubeShorts: ShortVideo[] = [
  { id: 'TmP8quCo_Hk', title: 'Asics Gel Kayano', thumb: '/videos/thumbs/TmP8quCo_Hk.jpg' },
  { id: 'PDzCo5uih0A', title: 'New Balance 530', thumb: '/videos/thumbs/PDzCo5uih0A.jpg' },
  { id: 'y2hFKThLBZQ', title: 'Nike Hot Step 2', thumb: '/videos/thumbs/y2hFKThLBZQ.jpg' },
  { id: '-8yI6p-Aaqs', title: 'Adidas Campus', thumb: '/videos/thumbs/-8yI6p-Aaqs.jpg' },
];

export const processSteps = [
  { n: '01', title: 'Choisissez votre modèle', desc: 'Parcourez notre collection et trouvez la paire qui vous ressemble.', icon: 'shoe' },
  { n: '02', title: 'Contactez-nous', desc: 'Un clic sur « Commander » ouvre WhatsApp avec un message prêt à envoyer.', icon: 'chat' },
  { n: '03', title: 'Validation', desc: 'Nous confirmons la disponibilité, votre pointure et la livraison.', icon: 'check' },
  { n: '04', title: 'Livraison', desc: 'Expédition soignée à Abidjan et partout en Côte d\u2019Ivoire.', icon: 'truck' },
  { n: '05', title: 'Profitez', desc: 'Recevez votre paire et affichez l\u2019élégance à vos pieds.', icon: 'sparkles' },
];

export const faqs = [
  {
    q: 'Les chaussures sont-elles neuves ?',
    a: 'Oui, toutes nos paires sont 100% neuves, soigneusement sélectionnées et livrées dans leur emballage d\u2019origine.',
  },
  {
    q: 'Comment commander ?',
    a: 'Cliquez sur « Commander » sous la paire de votre choix. Vous êtes redirigé vers WhatsApp avec un message pré-rempli. Confirmez, et nous nous occupons du reste.',
  },
  {
    q: 'Quels modes de paiement acceptez-vous ?',
    a: 'Paiement à la livraison ou via mobile money (Orange Money, MTN, Wave). Les détails sont confirmés sur WhatsApp.',
  },
  {
    q: 'Comment se passe la livraison ?',
    a: 'Nous livrons à Abidjan et dans toute la Côte d\u2019Ivoire. Zone et frais éventuels sont confirmés directement avec vous.',
  },
  {
    q: 'Quels sont les délais ?',
    a: 'Réponse en moins de 24h, livraison généralement sous 24 à 72h selon votre localisation.',
  },
];

export const whyUs = [
  { title: 'Sneakers tendance', desc: 'Les modèles les plus convoités, choisis pour leur allure.', icon: 'flame' },
  { title: 'Qualité premium', desc: 'Une sélection rigoureuse, soignée et authentique.', icon: 'gem' },
  { title: 'Prix accessibles', desc: 'Le meilleur rapport qualité-prix, sans compromis.', icon: 'tag' },
  { title: 'Livraison rapide', desc: 'Partout en Côte d\u2019Ivoire, en un temps record.', icon: 'truck' },
];

export const marqueeWords = [
  'Asics Gel Kayano', 'New Balance 530', 'Nike Air Max DN', 'Adidas Campus',
  'Authentique', 'Livraison 24h', 'Made for you',
];
