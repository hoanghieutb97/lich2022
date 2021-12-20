import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

function ThongTinCard(props) {
    let item = props.activeCard;
    return (
        <div className="col-12 thongtin">

            <div className="row mt-2">
                <div className="col-1">
                </div>

                <div className="col-3">
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.stt)}>id</span>: <span className="noidung-dong">{item.stt}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.fullname)}>fullname</span>: <span className="noidung-dong">{item.fullname}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.sdt)}>Sdt</span>: <span className="noidung-dong">{item.sdt}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.address)}>address</span>: <span className="noidung-dong">{item.address}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.date)}>date</span>: <span className="noidung-dong">{item.date}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.link)}>link</span>: <span className="noidung-dong">{item.link}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.note)}>note</span>: <span className="noidung-dong">{item.note}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.status)}>status</span>: <span className="noidung-dong">{item.status}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.xaPhuong)}>xã phường</span>: <span className="noidung-dong">{item.xaPhuong}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.quanHuyen)}>quận huyện</span>: <span className="noidung-dong">{item.quanHuyen}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.tinhThanhPho)}>tỉnh</span>: <span className="noidung-dong">{item.tinhThanhPho}</span></p>
                    <p className="dong-thongtin"><span className="title-dong" onClick={() => copy(item.thanhToan)}>thanh toán</span>: <span className="noidung-dong">{item.thanhToan}</span></p>
                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="col-5">
                            <img className='anh-bia' src={window.location.origin + "/img2020/" + item.stt + "/bia.jpg"} onClick={() => copy("/\/192.168.1.21/img2020/" + item.stt)}></img>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3">
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (1).jpg"}></img>
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (5).jpg"}></img>
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (9).jpg"}></img>




                                </div>
                                <div className="col-3">
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (2).jpg"}></img>
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (6).jpg"}></img>
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (10).jpg"}></img>

                                </div>
                                <div className="col-3">
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (3).jpg"}></img>
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (7).jpg"}></img>
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (11).jpg"}></img>

                                </div>
                                <div className="col-3">
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (4).jpg"}></img>
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (8).jpg"}></img>
                                    <img className='anh-thang' src={window.location.origin + "/img2020/" + item.stt + "/t (12).jpg"}></img>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
}

export default ThongTinCard;