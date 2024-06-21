import axios from 'axios';
import React, { useState } from 'react';

const OriginalUrl = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [fullShortenedUrl, setFullShortenedUrl] = useState(''); // State to store the full shortened URL
    const [msg, setMsg] = useState('');
    const [toast, setToast] = useState(false);

    // Handle Submit to get Shortened URL
    const handleShortenSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Get token from local storage
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token,  // Include token in custom header
        };
        const payload = { originalUrl };
        try {
            const res = await axios.post('https://url-shorten-backend-wpl6.onrender.com/api/url/shorten', payload, { headers });
            const shortUrl = res.data.shortUrl;
            const fullUrl = `https://url-shorten-backend-wpl6.onrender.com/api/url/${shortUrl}`; // Construct full URL
            setMsg(`Url shrinked successfully`);

            setTimeout(() => {
            setToast(true);
                
            }, 1000)
            setToast(false)
            setFullShortenedUrl(fullUrl);
            setOriginalUrl('');
        } catch (err) {
            setMsg(err.response.data.message);
            setToast(true);
        }
    };

    // Handle Redirect to Original URL
    const handleRedirectSubmit = async (e) => {
        e.preventDefault();
        try {
            window.location.href = fullShortenedUrl;
        } catch (err) {
            setMsg('Error redirecting to URL');
            setToast(true);
        }
    };

    return (
        <div>
            <h1 className='title'>URL Shortener</h1>
            <div className="card-center m-3">
                <div className="card card-format text-center">
                    <form onSubmit={handleShortenSubmit}>
                        <div className="row">
                            <div className="row-cols-sm-2">
                                <label className='col-12 col-sm-4 p-2 text-sm-end'>
                                    Enter Your URL:
                                </label>
                                <input className='border-black' required type="text" name="originalUrl" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} />
                            </div>
                        </div>
                        <button className="btn" type='submit'>
                            Shrink URL
                        </button>
                    </form>

                    {fullShortenedUrl && (
                        <div className="row mt-3">
                            <div className="row-cols-sm-2">
                                <label className='col-12 col-sm-4 p-2 text-sm-end'>
                                    Shortened URL:
                                </label>
                                <input className='border-black' type="text" name="shortenedUrl" value={fullShortenedUrl} readOnly />
                            </div>
                        </div>
                    )}

                    {/* Form to Redirect to Original URL */}
                    {fullShortenedUrl && (
                        <form onSubmit={handleRedirectSubmit} className="mt-3">
                            <div className="row">
                                <div className="row-cols-sm-2">
                                    <label className='col-12 col-sm-4 p-2 text-sm-end'>
                                        Redirect to URL:
                                    </label>
                                    <input className='border-black' type="text" name="shortenedUrl" value={fullShortenedUrl} readOnly />
                                </div>
                            </div>
                            <button className="btn" type='submit'>
                                Go to URL
                            </button>
                        </form>
                    )}

                    {/* Toast Notification */}
                    {toast && (
                        <div className="toast-container position-fixed top-0 end-0 p-3">
                            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="d-flex">
                                    <div className="toast-body fw-bolder w-100 text-bg-info">
                                        {msg}
                                    </div>
                                    <div className="toast-header">
                                        <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => setToast(false)}></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OriginalUrl;
