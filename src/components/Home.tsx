import React from 'react';
import '../styles/home.css';
import Fab from '@material-ui/core/Fab';
import Login from './Login';
const Link = require('react-router-dom').Link;

export default function Home() {
    return (
        <div className="homePage">
            <div>
                <img
                    className="homeImage"
                    src="https://s3-alpha-sig.figma.com/img/0017/b011/7f26ccef408ac3c4aab3a299d298e8f6?Expires=1574035200&Signature=MfrTqq8Sk2Fik3oPsRMwfs1IjD-MlyHAJsi~-tEltUeYWrAiGwRyahsfElYEKBM770WTv6~0REynVxz2-G3Yoo12aONIx6bCL6UYxv4NCBNgbIo7lSQGOvH1onPAH04P4~YdiMRWnJOGHOtWlERtr3wbRLmD8qS-Y90gZ46sdX6LdmW3EtkqoCNZNl4Goio2lVnvidua59GyLjLJ~o-ewrR-7is0Qo5U4Ig2sRRoYqil~BJsLzWe0~7kPt-FcnL382YD5brK2hVEXJbhFVR-l~oU8R4PTjkqT5CiEgJqmQE2WmI-ZbYyDQ9mwgsDxylz0VyXjzH~-glZvlMI~T0IgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Home Image"
                ></img>
            </div>
            <div>
                <h1 className="homeHeader">Digital Strategies - Since 2020</h1>
                <p className="homeParagraph">Join the Community to make an impact on your country</p>
                <Link to="/login">
                    <p className="joinButton">
                        {' '}
                        <Fab
                            variant="extended"
                            size="large"
                            style={{
                                borderRadius: 35,
                                backgroundColor: '#F2994A',
                                padding: '0 36px',
                            }}
                        >
                            Join
                        </Fab>
                    </p>
                </Link>
            </div>
        </div>
    );
}
