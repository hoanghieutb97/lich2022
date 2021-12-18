import React, { useState, useEffect } from 'react';
import * as constants from "./constants";
import axios from 'axios';
import Loading from './Loading';
import NoteCard from './NoteCard';


function App() {
  const [sheetBest, setSheetBest] = useState([]);
  const [FetchAPI, setFetchAPI] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const listi7 = ["Chờ ảnh", "Hàng đợi", "Thiết kế", "Khách chốt", "Đợi in", "Đóng gói", "Đã ship"]
  useEffect(() => { // fetch glass

    let ignore = false;
    async function fetchData() {
      const result = await axios(constants.sheetBest);
      if (!ignore) {
        setSheetBest(result.data);
        setFetchAPI(false);
      };
    }
    fetchData();
    return () => { ignore = true; }
  }, []);


  let patchItem = (stt, paramJson) => { // patch
    setFetchAPI(true);
    fetch(constants.sheetBest + "/stt/" + "*" + stt + "*", {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paramJson)

    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        async function fetchData() {
          const result = await axios(constants.sheetBest);
          setSheetBest(result.data)
          setFetchAPI(false);


        }
        fetchData();
      })
      .catch(err => {
        alert(" xử lý thất bạn, f5 trang")

        // reject(err)
      })
  }

  console.log(activeCard);

  let PatchchangeCard = (obj, itemcard) => {
    patchItem(itemcard.stt, obj)
  }

  return (

    <React.Fragment>
      {(FetchAPI === true) ? <Loading /> : ""}

      <div className="App backgroundall">
        <div className="container-fluid">
          <div className="row">

          </div>
          <div className="container-fluid">
            <div className="row">
              {listi7.map(item => <div className="col-1i7">
                <div className="pad-10" >

                  <div className="title-i7">
                    {item}
                  </div>
                  {sheetBest.filter(itesheetBestm => itesheetBestm.status === item).map(itemcard => <div className="one-card" onClick={() => setActiveCard(itemcard)}>
                    <p class="title-card"><span class="title-card-stt">{itemcard.stt}</span><span class="title-card-stt-date">{itemcard.date}</span></p>
                    <li className="nav-item dropdown active">
                      <button type="button" className=" nav-link dropdown-toggle top-top btclick top1btn" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                      <div className="dropdown-menu list-bt" aria-labelledby="navbarDropdown">
                        {listi7.map((itemlisti7m2, key) => <button type="button" className={"top-top bt" + (key + 1)} onClick={() => PatchchangeCard({ status: itemlisti7m2 }, itemcard)}>{itemlisti7m2}</button>)}
                      </div>
                    </li>
                    <NoteCard itemcard={itemcard} PatchchangeCard={PatchchangeCard} />
                  </div>)
                  }

                </div>
              </div>)
              }
            </div>
          </div>
        </div >
        <div className="container">
          <div className="row">
            <div className="col-12 thongtin">
              thông tin
              <div className="col-6">
                <p class="dong-thongtin"><span class="title-dong">id</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">fullname</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">Sdt</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">address</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">date</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">link</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">note</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">status</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">xã phường</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">quận huyện</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">tỉnh</span>:<span class="noidung-dong"></span></p>
                <p class="dong-thongtin"><span class="title-dong">thanh toán</span>:<span class="noidung-dong"></span></p>
              </div>
              <div className="col-6">
              </div>
            </div>
          </div>
        </div>
      </div >

    </React.Fragment >
  );
}

export default App;
