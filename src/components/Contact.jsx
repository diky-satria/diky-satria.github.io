import React from 'react'
import { BsFillGeoAltFill, BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs'

export default function Contact() {
  return (
    <div className="kontak" id="kontak">
        <div className="container">
            <div className="row" style={{marginBottom:'50px'}}>
                <div className="header-title">
                <h1>Contact</h1>
                <p>Please call me here !</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <div className="kontak-kiri">
                        <div className="row">
                            <div className="col">
                                <div className="pk-item">
                                    <p><span><BsFillGeoAltFill /></span>Location</p>
                                    <p className="p2">Jl. Salemba Bluntas, Jakarta Pusat</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="pk-item">
                                    <p><span><BsFillEnvelopeFill /></span>Email</p>
                                    <p className="p2">dikysr123456@gmail.com</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="pk-item">
                                    <p><span><BsFillTelephoneFill /></span>Telepon/WA</p>
                                    <p className="p2">0852-2479-3967</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
