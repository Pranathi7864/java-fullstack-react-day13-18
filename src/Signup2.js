import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Signup2 = () => {
    const navigate = useNavigate();
    // 1. Unified state structure for all inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        num: "",
        uname: "",
        pass: "",
        cpass: ""
    });

    // 2. Separate error messages tracker
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        num: "",
        uname: "",
        pass: "",
        cpass: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (value.trim() !== "") {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }

        // Live email formatting test
        if (name === "email" && value.trim() !== "") {
            if (!value.includes("@") || !value.includes(".")) {
                setErrors(prev => ({ ...prev, email: "Please enter a valid email format." }));
            } else {
                setErrors(prev => ({ ...prev, email: "" }));
            }
        }

        // Phone Validation: 10 digits maximum, numbers only
        if (name === "num") {
            const numbersOnly = value.replace(/[^0-9]/g, '');
            if (numbersOnly.length > 10) return; 
            setFormData(prev => ({ ...prev, num: numbersOnly }));
            
            if (numbersOnly.length > 0 && numbersOnly.length < 10) {
                setErrors(prev => ({ ...prev, num: "Phone number must be exactly 10 digits." }));
            } else {
                setErrors(prev => ({ ...prev, num: "" }));
            }
        }

        // Live primary password constraint check
        if (name === "pass") {
            if (value.length === 0) {
                setErrors(prev => ({ ...prev, pass: "" }));
            } else if (value.length < 8 || value.length > 15) {
                setErrors(prev => ({ ...prev, pass: "Length must be 8-15 characters." }));
            } else if (!(/[0-9]/.test(value))) {
                setErrors(prev => ({ ...prev, pass: "Must include a digit (0-9)." }));
            } else if (!(/[!@#$%^&*]/.test(value))) {
                setErrors(prev => ({ ...prev, pass: "Must contain one special character." }));
            } else {
                setErrors(prev => ({ ...prev, pass: "" }));
            }

            // Reset confirm password field if master password changes
            setFormData(prev => ({ ...prev, cpass: "" }));
            setErrors(prev => ({ ...prev, cpass: "" }));
        }

        // Live confirm password matcher
        if (name === "cpass") {
            if (value !== formData.pass) {
                setErrors(prev => ({ ...prev, cpass: "Confirm password does not match." }));
            } else {
                setErrors(prev => ({ ...prev, cpass: "" }));
            }
        }
    };

    // 4. THE INTERCEPTING FOCUS GUARD
    const handleFocus = (e) => {
        const targetName = e.target.name;
        const newErrors = { ...errors };

        // Clicking Email -> Check Name
        if (targetName === "email" && formData.name.trim() === "") {
            newErrors.name = "Name is required before entering email.";
        }

        // Clicking Phone Number -> Check Name and Email
        if (targetName === "num") {
            if (formData.name.trim() === "") newErrors.name = "Name is required.";
            if (formData.email.trim() === "") newErrors.email = "Email is required before entering phone number.";
        }

        // Clicking Username -> Check Name and Email
        if (targetName === "uname") {
            if (formData.name.trim() === "") newErrors.name = "Name is required.";
            if (formData.email.trim() === "") newErrors.email = "Email is required before choosing username.";
        }

        // Clicking Password -> Check Name, Email, and Username
        if (targetName === "pass") {
            if (formData.name.trim() === "") newErrors.name = "Name is required.";
            if (formData.email.trim() === "") newErrors.email = "Email is required.";
            if (formData.uname.trim() === "") newErrors.uname = "Username is required before setting password.";
        }

        // Clicking Confirm Password -> Check main password requirements
        if (targetName === "cpass") {
            if (formData.pass.trim() === "" || errors.pass !== "") {
                newErrors.pass = "Please complete a valid password structure first.";
            }
        }

        setErrors(newErrors);
    };

    // 5. Submit validation block
// 1. Add this at the very top of your Signup component function block:


// 2. Update your handleSubmit validation check block to include the routing step:
const handleSubmit = (e) => {
    e.preventDefault();
    
    const hasActiveErrors = Object.values(errors).some(err => err !== "");
    const isMissingRequired = !formData.name || !formData.email || !formData.uname || !formData.pass || !formData.cpass;

    if (hasActiveErrors || isMissingRequired) {
        alert("Registration blocked! Please fix outstanding issues in red.");
        return;
    }
    
    // SUCCESS PASS-THROUGH: Bounce cleanly over to the destination route panel!
    navigate('/dashboard', { state: { username: formData.uname, type: 'Signup' } });
};


    // Helper styling map function
    const getInputStyle = (fieldName) => ({
        ...styles.input,
        ...(errors[fieldName] ? styles.errorBorder : {})
    });

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.formCard}>
                <h2 style={styles.title}>Create Account</h2>
                
                <table style={styles.table}>
                    <tbody>
                        {/* Name Input Row */}
                        <tr>
                            <td>
                                <input type="text" 
                                name="name" 
                                placeholder="Full Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                onFocus={handleFocus} 
                                style={getInputStyle("name")}/> 
                                {errors.name && <small style={styles.errorText}>{errors.name}</small>}
                            </td>
                        </tr>

                        {/* Email Input Row */}
                        <tr>
                            <td>
                                <input type="email" 
                                name="email" 
                                placeholder="Email Address" 
                                value={formData.email} 
                                onChange={handleChange} 
                                onFocus={handleFocus} 
                                style={getInputStyle("email")}/>
                                {errors.email && <small style={styles.errorText}>{errors.email}</small>}
                            </td>
                        </tr>

                        {/* Phone Number Row */}
                        <tr>
                            <td>
                                <input type="text" 
                                name="num" 
                                placeholder="Phone Number" 
                                value={formData.num} 
                                onChange={handleChange} 
                                onFocus={handleFocus} 
                                style={getInputStyle("num")}/>
                                {errors.num && <small style={styles.errorText}>{errors.num}</small>}
                            </td>
                        </tr>

                        {/* Username Input Row */}
                        <tr>
                            <td>
                                <input type="text" 
                                name="uname" 
                                placeholder="Username" 
                                value={formData.uname} 
                                onChange={handleChange} 
                                onFocus={handleFocus} 
                                style={getInputStyle("uname")}/>
                                {errors.uname && <small style={styles.errorText}>{errors.uname}</small>}
                            </td>
                        </tr>

                        {/* Password Input Row */}
                        <tr>
                            <td>
                                <input type="password" 
                                name="pass" 
                                placeholder="Create Password" 
                                value={formData.pass} 
                                onChange={handleChange} 
                                onFocus={handleFocus} 
                                style={getInputStyle("pass")}/>
                                {errors.pass && <small style={styles.errorText}>{errors.pass}</small>}
                            </td>
                        </tr>

                        {/* Confirm Password Input Row */}
                        <tr>
                            <td>
                                <input type="password" 
                                name="cpass" 
                                placeholder="Confirm Password" 
                                value={formData.cpass} 
                                onChange={handleChange} 
                                onFocus={handleFocus} 
                                style={getInputStyle("cpass")}/>
                                {errors.cpass && <small style={styles.errorText}>{errors.cpass}</small>}
                            </td>
                        </tr>

                        {/* Button Row */}
                        <tr>
                            <td style={{ textAlign: 'center', paddingTop: '15px' }}>
                                <button type="submit" style={styles.submitBtn} id="signupBtn">Sign Up</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <style>{`
                #signupBtn { transition: all 0.2s ease; }
                #signupBtn:hover { background-color: #1d4ed8; transform: translateY(-1px); }
                #signupBtn:active { transform: translateY(0); }
            `}</style>
        </div>
    );
};

// Complete structured styling object
const styles = {
    container: { 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh", 
        backgroundColor: "#f3f4f6", 
         borderRadius: "16px", 
        fontFamily: "system-ui, -apple-system, sans-serif" ,
        
    },
    formCard: { 
        backgroundColor: "#ffffff", 
        padding: "30px", 
        borderRadius: "16px", 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)", 
        width: "350px", 
        boxSizing: "border-box" 
    },
    title: { 
        textAlign: "center", 
        color: "#111827", 
        marginBottom: "24px", 
        fontSize: "24px", 
        fontWeight: "700" 
    },
    table: { 
        width: "100%" 
    },
    input: { 
    width: "100%",
    padding: "11px 14px",
    margin: "6px 0",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    boxSizing: "border-box",
    fontSize: "14px",
    transition: "all 0.2s ease",
    outline: "none"
},
errorBorder: {
    borderColor: "#dc2626",
    backgroundColor: "#fef2f2",
    boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.15)"
},
    errorText: {
        color: "#dc2626",
        fontSize: "11px",
        display: "block",
        marginTop: "1px",
        marginBottom: "4px",
        fontWeight: "500",
        paddingLeft: "2px"
    },
        submitBtn: {
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "10px"
        }
    };