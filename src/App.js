import React, {
  Suspense,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import moment from "moment";
import AppContext from "./Context/AppContext";



import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const loading = (
  <div className="loading">
    <div className="spinner-grow text-success" role="status"></div>
  </div>
);

const Landingpage = React.lazy(() => import("./pages/LandingPage/LandingPage"));
const Payment = React.lazy(() => import('./components/Payment/Payment'))
const PrivacyPolicyComponent = React.lazy(() => import('./pages/TermsAndConditions/TermsAndConditions'))

function App() {





  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider>
        <Router>
          <Suspense fallback={loading}>
            <Routes>
              <Route exact path="/" name="Login Page" element={<Landingpage />} />
              <Route exact path="/PrivacyPolicy" name="Login Page" element={<PrivacyPolicyComponent />} />
              <Route exact path="/payment" name="Login Page" element={<Payment />} />
            </Routes>
          </Suspense>
        </Router>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
