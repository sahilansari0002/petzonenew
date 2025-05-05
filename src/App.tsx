import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PetsPage from './pages/PetsPage';
import PetDetailsPage from './pages/PetDetailsPage';
import AdoptionPage from './pages/AdoptionPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import DonationPage from './pages/DonationPage';
import SheltersPage from './pages/SheltersPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';
import UserDashboard from './pages/UserDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="pets" element={<PetsPage />} />
          <Route path="pets/:id" element={<PetDetailsPage />} />
          <Route path="adopt/:id" element={<AdoptionPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="donate" element={<DonationPage />} />
          <Route path="shelters" element={<SheltersPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;