/** Sinal de Concreto: rotas de marketplace organizadas como uma central de contratação industrial. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Machines from "./pages/Machines";
import EquipmentDetails from "./pages/EquipmentDetails";
import Providers from "./pages/Providers";
import ProviderSignup from "./pages/ProviderSignup";
import Login from "./pages/Login";
import ProviderDashboard from "./pages/ProviderDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import About from "./pages/About";

function AppRoutes() {
  return <Switch>
    <Route path="/" component={Home} /><Route path="/maquinas" component={Machines} /><Route path="/detalhes/:id" component={EquipmentDetails} />
    <Route path="/prestadores" component={Providers} /><Route path="/cadastro" component={ProviderSignup} /><Route path="/login" component={Login} />
    <Route path="/dashboard/prestador" component={ProviderDashboard} /><Route path="/dashboard/cliente" component={ClientDashboard} /><Route path="/sobre" component={About} />
    <Route path="/404" component={NotFound} /><Route component={NotFound} />
  </Switch>;
}

function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster richColors position="top-right" /><Router hook={useHashLocation}><AppRoutes /></Router></TooltipProvider></ThemeProvider></ErrorBoundary>; }
export default App;
