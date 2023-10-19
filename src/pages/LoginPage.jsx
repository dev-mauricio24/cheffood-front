import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const { signIn, isAuthenticated, errors: err } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = handleSubmit(async (values) => {
    signIn(values);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <form onSubmit={handleLoginSubmit} className="form-login">
        {err && (
          <div className="alert alert-danger" role="alert">
            { err }
          </div>
        )}
        <div className="card">
          <div className="card-header">
            <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
          </div>
          <div className="card-body">
            <div className="form-floating mb-3">
              <input
                type="email"
                {...register("email", { required: true })}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
              {errors.email && (
                <p className="text-danger mt-2">El email es obligatorio</p>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                {...register("password", { required: true })}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
              {errors.password && (
                <p className="text-danger mt-2">La contraseña es obligatorio</p>
              )}
            </div>
          </div>
          <div className="card-footer">
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
