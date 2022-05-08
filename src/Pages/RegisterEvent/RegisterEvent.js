import "./RegisterEvent.css";
import React, { useEffect, useState } from "react";

import ListPasenger from "../../Components/Register/ListPassenger";
import PassengerInput from "../../Components/Register/PassengerInput";
import EditPage from "../../Components/Register/Edit";
import { GETUsers, DELETE, INSERT, EDIT } from "../Store/query";
import { useQuery, useMutation } from "@apollo/client";

import Navbar from "../../Components/Navbar/Navbar";
import RegisterBackground from "../../Images/backgroundEvents.png";
import bgRegister from "../../Images/bgRegister.png"




function RegisterEvent() {
  const { data: respond, loading: isLoad, refetch } = useQuery(GETUsers);
  const [deleteTodo] = useMutation(DELETE, {
    refetchQueries: [GETUsers],
  });
  const [insertTodo] = useMutation(INSERT, {
    refetchQueries: [GETUsers],
  });
  const [editList] = useMutation(EDIT, {
    refetchQueries: [GETUsers],
  });

  const [list, setList] = useState([]);
  const [option, setOption] = useState([]);
  const [done, setDone] = useState(false);

  const hapusPengunjung = (id) => {
    deleteTodo({
      variables: {
        id: id,
      },
    });
  };
  const tambahPengunjung = (newUser) => {
    insertTodo({
      variables: {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        age: newUser.age,
        gender: newUser.gender,
        country: newUser.country,
        mail: newUser.mail,
        event: newUser.event
      },
    });
  };

  const editbyID = (val) => {
    val.id = parseInt(val.id);
    editList({
      variables: {
        id: val.id,
        firstname: val.firstname,
        lastname: val.lastname,
        age: val.age,
        gender: val.gender,
        country: val.country,
        mail: val.mail,
        event: val.event
      },
    });
  };

  const allData = () => {
    if (respond?.users === list) {
      alert("Data sedang ditampilkan");
    }
    setList(respond?.users);
    setDone(false);
  };

  useEffect(() => {
    setList(respond?.users);
  }, [respond]);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    setOption(list?.map((i) => i.id));
  }, [list]);

    // ------------------------
    const [editing, setEditing] = useState(true)
    const handleOpen = () => {
      setEditing(false)
    }
    const handleClose=() => {
      setEditing(true)
    }
  
    let viewMode = {};
    let editMode = {};
  
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
  // ------------------------

  return (
    <>
      <Navbar></Navbar>

      <div style={{background: `url(${bgRegister})`}}>
      <div className="register-image">
        <img src={RegisterBackground}></img>
      </div>

      <div className="home">
        <div>
        <div className="input-data" style={viewMode}>
          <h2>Change Your Data</h2>
          <EditPage option={option} edit={editbyID} />
          <button className="btn" onClick={handleClose}>Tutup</button>
        </div>
        <button onClick={handleOpen} style={editMode} className="buttonInputan">Edit</button>
        </div>
        <div className="input-data">
          <h2>Booking The Event</h2>
          <PassengerInput tambahPengunjung={tambahPengunjung} />
        </div>
        <div className="daftarPeserta">
          {isLoad? (
            <h1>Loading data....</h1>
          ) : (
            <ListPasenger data={list} hapusPengunjung={hapusPengunjung}/>
          )}
          {done && (
            <>
              <h5 style={{ display: "inline-block" }}>Refetch All Data?</h5>
              <span></span>
              <button onClick={allData}>Refetch</button>
            </>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

export default RegisterEvent;
