import React, { useEffect, useRef, useState } from "react";
import './LandingPage.css'
import Assets from "../../assets/Assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import moment from "moment";
import 'react-intl-tel-input/dist/main.css'; // Import CSS
import IntlTelInput from 'react-intl-tel-input'; // Import React component
import Select from 'react-select';
import Ranking1 from '../../assets/mailpal/Group 14874.svg'
import Ranking2 from '../../assets/mailpal/Group 14875.svg'
import Ranking3 from '../../assets/mailpal/Group 14876.svg'
import Ranking4 from '../../assets/mailpal/Group 14877.svg'
import Ranking5 from '../../assets/mailpal/Group 14878.svg'
import Ranking6 from '../../assets/mailpal/Group 14879.svg'
import Ranking7 from '../../assets/mailpal/Group 14886.svg'
import Ranking8 from '../../assets/mailpal/Group 14887.svg'
import Ranking9 from '../../assets/mailpal/Group 14882.svg'
import Ranking10 from '../../assets/mailpal/Group 14883.svg'
import moneysss from '../../assets/payments_FILL0_wght300_GRAD0_opsz48.png'
import hat from '../../assets/hat.svg'
import whatapp from '../../assets/whatapp.c7b85d402a1d4c6212b873b8a82e0d3c (1).svg'
import callPhone from '../../assets/callphone.svg'
import axios from "axios";
import FormModle from "../../components/ModlePopup/ModleSuccess";

const Landingpage = () => {
    const [success, setSuccess] = useState(false)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", font: "30px", left: "15px", zIndex: "10" }}
                onClick={onClick}
            >
                {/* Your custom previous arrow icon or SVG */}

            </div>
        );
    };
    const postData = async () => {
        try {
            const baseUrl = 'https://lappsin21.leadsquared.com/executebylapptoken';
            const queryParams = new URLSearchParams({
                name: 'da_54036_e738136c',
                stage: 'Live',
                xapikey: '402809e910794df692e68da913bfee87',
                utm_source: 'your_source',
                utm_medium: 'your_medium',
                utm_campaign: 'your_campaign',
                utm_term: 'your_term',
                utm_content: 'your_content'
            });
            const url = `${baseUrl}?${queryParams.toString()}`;

            const requestBody = [
                {
                    "Attribute": "FirstName",
                    "Value": "Kshitiz Test"
                },
                {
                    "Attribute": "EmailAddress",
                    "Value": "raj97krs@gmail.com"
                },
                {
                    "Attribute": "Phone",
                    "Value": "9110429179"
                },
                {
                    "Attribute": "mx_course_applying_for",
                    "Value": "BBA"
                },
                {
                    "Attribute": "Source",
                    "Value": "Agents"
                },
                {
                    "Attribute": "Source Medium",
                    "Value": "SENSE"
                },
                {
                    "Attribute": "mx_Mobile",
                    "Value": "+91- 8220588088"
                },
                {
                    "Attribute": "mx_Enquired_University",
                    "Value": "MUJ"
                }
            ];

            const response = await axios.post(url, requestBody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // console.log(response.data);
        } catch (error) {
            // console.error('Error:', error);
        }
    };

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", right: "15px", zIndex: "10" }}
                onClick={onClick}
            >
                {/* Your custom next arrow icon or SVG */}

            </div>
        );
    };

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />, // Use custom previous arrow component
        nextArrow: <NextArrow />, // Use custom next arrow component
    };
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            window.intlTelInput(inputRef.current, {
                initialCountry: 'in',
                separateDialCode: false, // Set to false to hide the flag
            });
        }
    }, []);
    const [currectday, setCurrentday] = useState()
    console.log('ioioiooi', currectday)
    useEffect(() => {
        const now = moment();
        const day = now.day();
        console.log(day)


        if (day == '1') {
            const datePlusTwoDays = now.add(1, 'days').format('Do MMMM');
            setCurrentday(datePlusTwoDays)
        } else if (day == '2') {
            const datePlusTwoDays = now.add(2, 'days').format('Do MMMM');
            setCurrentday(datePlusTwoDays)

        } else if (day == '3') {
            const datePlusTwoDays = now.add(1, 'days').format('Do MMMM');
            setCurrentday(datePlusTwoDays)

        } else if (day == "4") {
            const datePlusTwoDays = now.add(2, 'days').format('Do MMMM');
            setCurrentday(datePlusTwoDays)
        } else if (day == '5') {
            const datePlusTwoDays = now.add(1, 'days').format('Do MMMM');
            setCurrentday(datePlusTwoDays)

        } else if (day == '6') {
            const datePlusTwoDays = now.add(3, 'days').format('Do MMMM');
            setCurrentday(datePlusTwoDays)
        } else {
            const datePlusTwoDays = now.add(2, 'days').format('Do MMMM');
            setCurrentday(datePlusTwoDays)
        }
    }, [])
    const options = [
        { value: 'BA', label: 'BA' },
        { value: 'BBA', label: 'BBA' },
        { value: 'BCA', label: 'BCA' },
        { value: 'B.Com', label: 'B.Com' },
        { value: 'MBA', label: 'MBA' },
        { value: 'MCA', label: 'MCA' },
        { value: 'M.Com', label: 'M.Com' },
        { value: 'MA.JMC', label: 'MA.JMC' },
        { value: 'MA English', label: 'MA English' },
        { value: 'MA Sociology', label: 'MA Sociology' },
        { value: 'MA Political Science', label: 'MA Political Science' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };
    const [activeTab, setActiveTab] = useState('all'); // Default active tab is 'all'

    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    const All = [
        {
            c: "MBA",
            d: "Master of Business Administration",
            mon: "24",
            am: "1,75,000",
            uni: "Manipal University Jaipur"
        },
        {
            c: "BBA",
            d: "Bachelor of Business Administration",
            mon: "36",
            am: "1,35,000",
            uni: "Manipal University Jaipur"
        },
        {
            c: "MCA",
            d: "Master of Computer Applications",
            mon: "24",
            am: "98,000",
            uni: "Sikkim Manipal University"
        },
        {
            c: "MBA",
            d: "Master of Business Administration",
            mon: "24",
            am: "2,80,000",
            uni: "Manipal Academy"
        },
        {
            c: "BCA",
            d: "Master of Business Administration",
            mon: "24",
            am: "1,75,000",
            uni: "Manipal University Jaipur"
        },
        {
            c: "BCA",
            d: "Master of Business Administration",
            mon: "24",
            am: "1,75,000",
            uni: "Manipal University Jaipur"
        },
        {
            c: "BCA",
            d: "Master of Business Administration",
            mon: "24",
            am: "1,75,000",
            uni: "Manipal University Jaipur"
        },
        {
            c: "BCA",
            d: "Master of Business Administration",
            mon: "24",
            am: "1,75,000",
            uni: "Manipal University Jaipur"
        },

    ]
    const openWhatsApp = () => {
        const phoneNumber = '919500625088'; // Replace with the phone number you want to open
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };
    const openCall = () => {
        const phoneNumber = '919500625088'; // Replace with the phone number you want to call
        const callUrl = `tel:${phoneNumber}`;
        window.open(callUrl);
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [error, setError] = useState({
        name: "",
        email: "",
        contact: "",
        selectedOption: ""
    })


    const handlePhoneNumberChange = (isValid, value, countryData, number, id) => {
        setContact(value);
    };




    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset error state
        let errors = {
            name: "",
            email: "",
            contact: "",
            selectedOption: ""
        };

        // Basic validation
        let isValid = true;
        if (!name) {
            errors.name = "Name is required";
            isValid = false;
        }

        if (!contact) {
            errors.contact = "Contact is required";
            isValid = false;
        } else {
            const contactRegex = /^\d{10}$/;
            if (!contactRegex.test(contact)) {
                errors.contact = "Invalid contact number";
                isValid = false;
            }
        }

        if (!email) {
            errors.email = "Email is required";
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.email = "Invalid email format";
                isValid = false;
            }
        }

        if (!selectedOption) {
            errors.selectedOption = "Option is required";
            isValid = false;
        }

        setError(errors);
        if (!isValid) {
            return;
        }

        let data = JSON.stringify({
            contact: contact,
            name: name,
            email: email,
            cou: selectedOption ? selectedOption.value : ''
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.123admissions.com/api/v1/maipalform',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                setSuccess(true)
                setSelectedOption(null)
                setName('')
                setContact('')
                setEmail('')

            })
            .catch((error) => {
                // console.log(error);
            });
    };


    return (
        <>
            <div className="LandingPage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="logo">
                                            <img src={Assets?.Logo}></img>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="call">
                                            <div>
                                                <img src={Assets?.Call}></img>
                                            </div>
                                            <div>
                                                +91 9500625088
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="enroll">
                                            <button onClick={postData}>Enroll Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12" style={{ marginTop: "70px" }}>
                            <div className="sliderfrom">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <Slider {...settings}>
                                            <div>

                                                <img src={Assets?.Slidershow} style={{ width: "100%" }}></img>
                                            </div>
                                            <div>
                                                <img src={Assets?.Slidershow2} style={{ width: "100%" }}></img>
                                            </div>

                                        </Slider>
                                        <div className="loader">
                                            <img src={Assets?.loader} style={{ width: "30px", marginRight: "10px" }}></img>
                                            Last date of admission: {currectday} | Limited seats available!
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="formSubmit">
                                            <div className="row">
                                                <div className="col-12">
                                                    Enter your details and our experts will get in touch with you shortly!
                                                </div>
                                                <div className="col-12 mt-2" style={{ textAlign: "start" }}>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Enter your name*"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                    <small style={{ color: "red" }}>{error?.name}</small>
                                                </div>
                                                <div className="col-12 mt-2" style={{ textAlign: "start" }}>
                                                    <input
                                                        className="form-control"
                                                        placeholder="yourname@email.com*"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <small style={{ color: "red" }}>{error?.email}</small>
                                                </div>
                                                <div className="col-12 mt-2" style={{ textAlign: "start", color: "black" }}>
                                                    <IntlTelInput
                                                        inputProps={{ id: '91', name: 'india', ref: inputRef }}
                                                        onPhoneNumberChange={handlePhoneNumberChange}
                                                        defaultCountry="in"
                                                        required
                                                    />
                                                    <small style={{ color: "red" }}>{error?.contact}</small>
                                                </div>
                                                <div className="col-12 mt-2" style={{ color: "black", textAlign: "start" }}>
                                                    <Select
                                                        value={selectedOption}
                                                        onChange={handleChange}
                                                        options={options}
                                                        required
                                                    />
                                                    <small style={{ color: "red" }}>{error?.selectedOption}</small>
                                                </div>
                                                <div className="col-12 mt-2">
                                                    <div style={{ textAlign: "start", fontSize: "10px" }}>
                                                        <input style={{ marginRight: "10px" }} type="checkbox" required />
                                                        I authorize Online Manipal and its associates to contact me with updates & notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-5">
                                                    <button className="submit" type="submit" onClick={handleSubmit}>Enroll Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="exp">
                                <div className="item">
                                    <h3>70+</h3>
                                    <p>years of Manipal legacy </p>
                                </div>
                                <div className="item">
                                    <h3>1500+</h3>
                                    <p>Learner footprint across towns & cities of India </p>
                                </div>
                                <div className="item">
                                    <h3>60+</h3>
                                    <p>Student nationalities </p>
                                </div>
                                <div className="item">
                                    <h3>500+</h3>
                                    <p>Expert faculty</p>
                                </div>
                                <div className="item">
                                    <h3>100+</h3>
                                    <p>Recruiters from Fortune 500 companies</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-12 mt-3 p">
                                    <h1>Rankings & accreditations</h1>
                                </div>
                                <div className="col-12 mt-5">
                                    <Slider {...settings2}>
                                        <div style={{ padding: "10px" }}>

                                            <img src={Ranking1} style={{ width: "90%" }}></img>
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <img src={Ranking2} style={{ width: "90%" }}></img>
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <img src={Ranking3} style={{ width: "90%" }}></img>
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <img src={Ranking4} style={{ width: "90%" }}></img>
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <img src={Ranking5} style={{ width: "90%" }}></img>
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <img src={Ranking6} style={{ width: "90%" }}></img>
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <img src={Ranking7} style={{ width: "90%" }}></img>
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <img src={Ranking8} style={{ width: "90%" }}></img>
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <img src={Ranking9} style={{ width: "90%" }}></img>
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <img src={Ranking10} style={{ width: "90%" }}></img>
                                        </div>

                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <h1>Explore our online degree courses</h1>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="tab-container">
                                        <div className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleClick('all')}>All</div>
                                        <div className={`tab ${activeTab === 'masters' ? 'active' : ''}`} onClick={() => handleClick('masters')}>Master's Degree</div>
                                        <div className={`tab ${activeTab === 'bachelors' ? 'active' : ''}`} onClick={() => handleClick('bachelors')}>Bachelor's Degree</div>
                                    </div>


                                </div>
                                {activeTab == 'all' || 'masters' || 'bachelors' ?
                                    <div className="col-12 mt-3 g">
                                        <div className="exp2">
                                            {All?.map((d) => (<div className="card-couse">
                                                <div className="upper-content">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="header-card">
                                                                <img src={hat} style={{ width: "30px" }}></img>
                                                                <h5 style={{ marginLeft: "10px", marginTop: "7px" }}>{d?.c}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 mt-3">
                                                            {d?.d}
                                                        </div>
                                                        <div className="col-12 mt-3">
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    <i class='far fa-calendar-alt'></i><small style={{ marginLeft: "10px" }}>{d?.mon} Months</small>
                                                                </div>
                                                                <div>
                                                                    <img src={moneysss} /> INR {d?.am}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 mt-1">
                                                            <hr></hr>
                                                        </div>
                                                        <div className="col-12 mt-4">
                                                            <h5>{d?.uni}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>))}
                                        </div>
                                    </div>
                                    : <></>}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="footer">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="footer-main">
                                        <h1>Interested to join
                                            our courses?</h1>
                                        <small>Share your details and we'll get back to you.</small>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form_info">
                                        <div className="form">
                                            <div className="row">
                                                <div className="col-12">
                                                    Enter your details and our experts will get in touch with you shortly!
                                                </div>
                                                <div className="col-12 mt-2" style={{ textAlign: "start" }}>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Enter your name*"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                    <small style={{ color: "red" }}>{error?.name}</small>
                                                </div>
                                                <div className="col-12 mt-2" style={{ textAlign: "start" }}>
                                                    <input
                                                        className="form-control"
                                                        placeholder="yourname@email.com*"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <small style={{ color: "red" }}>{error?.email}</small>
                                                </div>
                                                <div className="col-12 mt-2" style={{ textAlign: "start", color: "black" }}>
                                                    <IntlTelInput
                                                        inputProps={{ id: '91', name: 'india', ref: inputRef }}
                                                        onPhoneNumberChange={handlePhoneNumberChange}
                                                        defaultCountry="in"
                                                        required
                                                    />
                                                    <small style={{ color: "red" }}>{error?.contact}</small>
                                                </div>
                                                <div className="col-12 mt-2" style={{ color: "black", textAlign: "start" }}>
                                                    <Select
                                                        value={selectedOption}
                                                        onChange={handleChange}
                                                        options={options}
                                                        required
                                                    />
                                                    <small style={{ color: "red" }}>{error?.selectedOption}</small>
                                                </div>
                                                <div className="col-12 mt-2">
                                                    <div style={{ textAlign: "start", fontSize: "10px" }}>
                                                        <input style={{ marginRight: "10px" }} type="checkbox" required />
                                                        I authorize Online Manipal and its associates to contact me with updates & notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-5">
                                                    <button className="submit" type="submit" onClick={handleSubmit}>Enroll Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="completed">
                            <div>© Online Manipal 2024</div>
                            <div><a href="https://admissionsmanipal.com/PrivacyPolicy">Privacy Policy</a></div>
                            <div>Help Center</div>
                        </div>
                    </div>
                </div>
                <div className="whatapp">
                    <img src={whatapp} style={{ width: "44px", marginRight: "20px", cursor: "pointer" }} onClick={openWhatsApp}></img><br></br>
                    <div style={{ backgroundColor: "blue", width: "44px", borderRadius: "50%", textAlign: "center", height: "40px", paddingTop: "8px", marginTop: "5px", cursor: "pointer" }}
                        onClick={openCall}
                    >
                        <img src={callPhone}></img>
                    </div>
                </div>
            </div>
            <FormModle
                setSuccess={setSuccess}
                success={success}
            />

        </>
    )
}
export default Landingpage