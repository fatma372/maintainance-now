import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash,faReply } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({
        userType: 'client',
        phone: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', loginData);
        // Add login logic here
    };

    return (
       <div className="login-page py-5">
         <div className="login-container form-container bg-[var(--my-gray)] md:w-[80svw] md:px-20 px-5 shadow-lg rounded-lg py-5 pb-7 m-5 md:mx-auto">
                            <Link to={'/'}><FontAwesomeIcon icon={faReply} className='text-[var(--my-green)] hover:text-[var(--dark-green)] transition-colors' /> </Link>
                
                <figure>
                <img src="logo.png" className='mx-auto mb-2 h-25' alt="logo" />
            </figure>
            <h2 className='md:text-xl text-end my-3 font-bold '>  تسجيل الدخول كـ</h2>

            <div className="user-type-selector">
                <button
                    className={`toggle-btn ${loginData.userType === 'client' ? 'active' : ''}`}
                    onClick={() => setLoginData({ ...loginData, userType: 'client' })}
                    type="button"
                >
                    عميل
                </button>
                <button
                    className={`toggle-btn ${loginData.userType === 'provider' ? 'active' : ''}`}
                    onClick={() => setLoginData({ ...loginData, userType: 'provider' })}
                    type="button"
                >
                    مقدم خدمة
                </button>
            </div>

            <form onSubmit={handleSubmit} dir='rtl'>
                <div className="form-group">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={loginData.phone}
                        onChange={handleChange}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="phone">رقم الهاتف</label>
                </div>

                <div className="form-group w-full relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                        placeholder=""
                    />
                    <label htmlFor="password">كلمة المرور</label>
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                        onClick={togglePasswordVisibility}
                    />
                </div>

                <div className="flex justify-between items-center ">
                   

                    <div className="checkbox-group mt-2 px-2" dir='rtl' >
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="checkbox"
                        />
                        <label htmlFor="rememberMe" className=''>تذكرني</label>
                    </div>
                     <div className="forgot-password text-[var(--my-green)] pb-3">
                        <Link to=''>نسيت كلمة المرور؟</Link>
                    </div>
                </div>
        <hr className='border-gray-400 mb-4 mx-2'/>
                <button type="submit" className="submit-btn">دخول</button>
            </form>

            <div className="signup-link text-[var(--dark-gray)] text-center my-2 mb-5">
                لا تمتلك حساب؟ <Link className='text-[var(--mid-green)] underline' to="/signup">قم بإنشاء حساب</Link>
            </div>

            <div className="social-login text-[var(--dark-gray)]">
                <p className='before-and-after text-center my-2 relative px-1 text-sm'>أو من خلال</p>
                
                  {/* social login logos*/}
                <div className="social-logos flex justify-center items-center gap-3 mt-5">
                    <button>
                        <figure>
                            <img className='border-1 h-8 bg-white border-gray-300 rounded px-4 py-1' src="google-logo.png" alt="Google" />
                        </figure>
                    </button>
                    <button>
                        <figure>
                            <img className='border-1 h-8 bg-white border-gray-300 rounded px-4 py-1' src="facebook-logo.png" alt="Facebook" />
                        </figure>
                    </button>
                    <button>
                        <figure>
                            <img className='border-1 h-8 bg-white border-gray-300 rounded px-4 py-1' src="apple-logo.png" alt="apple" />
                        </figure>
                    </button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Login;