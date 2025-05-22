import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faEye, faEyeSlash, faReply} from '@fortawesome/free-solid-svg-icons';
import './Signup.css';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [formData, setFormData] = useState({
        userType: 'provider',
        profilePhoto: null,
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        city: '',
        cardNumber: '',
        jobTitle: '',
        agreeToTerms: false
    });

    const [photoPreview, setPhotoPreview] = useState(null);
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'file') {
            const file = files[0];
            setFormData(prev => ({
                ...prev,
                [name]: file
            }));

            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPhotoPreview(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setPhotoPreview(null);
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
       <div className="signup-page py-5">
         <div className="form-container bg-[var(--my-gray)] md:w-[80svw] md:px-20 px-5 shadow-lg rounded-lg py-5 m-5 md:mx-auto">
            <Link to={'/'}><FontAwesomeIcon icon={faReply} className='text-[var(--my-green)] hover:text-[var(--dark-green)] transition-colors' /> </Link>
            <div className="photo-upload-container flex flex-col items-center">
                <div className="photo-upload">
                    {photoPreview ? (
                        <img src={photoPreview} alt="Profile preview" className="photo-preview" />
                    ) : (
                        <FontAwesomeIcon icon={faImage} className="upload-icon" />
                    )}
                    <input
                        type="file"
                        id="profilePhoto"
                        accept="image/*"
                        name="profilePhoto"
                        onChange={handleChange}
                        className="file-input"
                    />

                </div>
                <label htmlFor="profilePhoto" className="upload-label text-md">
                    {photoPreview ? 'تغيير الصورة' : 'إضافة الصورة الشخصية'}
                </label>
            </div>
            <h2 className='text-xl font-bold text-center mt-3 mb-5'>إنشاء حساب</h2>

            <div className="user-type-selector">
                <button
                    className={`toggle-btn ${formData.userType === 'client' ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, userType: 'client' })}
                    type="button"
                >
                    عميل
                </button>
                <button
                    className={`toggle-btn ${formData.userType === 'provider' ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, userType: 'provider' })}
                    type="button"
                >
                    مقدم خدمة
                </button>

            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="fullName">الاسم الكامل</label>
                </div>

                <div className='md:flex gap-3'>
                    <div className="form-group w-full ">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            pattern='[0-9]{11}'
                        />
                        <label htmlFor="phone">رقم الهاتف</label>
                        <span className="country-code p-2 " dir='ltr'></span>
                    </div>

                    <div className="form-group w-full">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">البريد الإلكتروني</label>
                    </div>
                </div>

                <div className="md:flex gap-3">

                     <div className="form-group w-full relative">
                            <input
                                type={showPassword.password ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="pl-35"
                            />
                            <label htmlFor="password">كلمة المرور</label>
                            <FontAwesomeIcon 
                                icon={showPassword.password ? faEyeSlash : faEye}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                                onClick={() => togglePasswordVisibility('password')}
                            />
                        </div>

                        <div className="form-group w-full relative">
                            <input
                                type={showPassword.confirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="pl-10"
                            />
                            <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
                            <FontAwesomeIcon 
                                icon={showPassword.confirmPassword ? faEyeSlash : faEye}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                            />
                        </div>
                </div>

                {
                    formData.userType === 'provider' &&
                    <div>
                       <div className='md:flex gap-3'>
                         <div className="form-group w-full">
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="city">المدينة</label>
                        </div>

                        <div className="form-group w-full">
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="cardNumber">رقم البطاقة</label>
                        </div>
                       </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="jobTitle"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="jobTitle">القسم</label>
                        </div>
                    </div>
                }

                <div className="checkbox-group"dir='rtl' >
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                        className="checkbox"
                    />
                    <label htmlFor="agreeToTerms" className="text-sm">       
                        <span>
                            لقد قرأت وأوافق على
                        </span>
                        <div className='text-[var(--my-orange)] p-1 inline'>
                            الشروط والأحكام
                        </div>
                    </label>
                </div>

                <button type="submit" className="submit-btn">إنشاء</button>
            </form>

            <p className="login-link">لديك حساب بالفعل؟ <a href="/login">تسجيل الدخول</a></p>
        </div>
       </div>
    );
};
