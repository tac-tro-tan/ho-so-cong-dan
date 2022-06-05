import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Container } from "react-bootstrap";
import {Animated} from "react-animated-css";
import { useLocation } from "react-router-dom";
import Data from "../dataHome.json"

function Home() {
    const [anime, setAnime]= useState(false);
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/employees').then(
            res =>{
                console.log(res.data);
            }
        ).catch(
            err =>{
                console.log(err)
            }
        )
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            setAnime(!anime);
        },8000);
    })

    const {search} = useLocation();
    const match = search.match(/sign=(.*)/);
    const sign = match?.[1];
    

    return (
        <div style={{width:"100vw"}}>
            <div style={{textAlign: "center"}}><h1>Trang chủ</h1></div>
            {/* {data && <div>
                Hi {data.CMND}
            </div>} */}
            <Container>
            <div className="mx-auto col text-center scroll-container" >
                <div style={{height:"100vh"}}>
                    <h2 className="divv">{sign?"Lâm":"Bạn"} có muốn biết thông tin về</h2>
                    <div className="d-flex justify-content-center" >
                        <div className="box2 text-center">
                            <a href="#phapluat" className="lienket">Pháp luật</a>
                        </div>
                        <div className="box2 text-center">
                            <a href="#chinhtri" className="lienket">Chính trị</a>
                        </div>
                    </div>
                </div>
               
                

                <section id="phapluat" className="divv" style={{alignItems:"center",textAlign:"center",alignSelf:"center",alignContent:"center"}}>
                    <div style={{textAlign: "center"}}><h2>Pháp luật</h2></div>
                        {
                            Data.map((post, index) => (
                            // <Animated animationIn="fadeInLeftBig" animationOut="fadeOutRight" key={index} 
                            // animationInDelay={post.id*1000} animationOutDelay={post.id*1000}
                            // animationInDuration={1000} animationOutDuration={1000} 
                            // isVisible={anime} >
                                <div className="box2 text-center d-flex flex-column box-width-1" >
                                    <span class="date">{post.date}</span>
                                    <h3>{post.title}</h3>
                                    <h5>{post.description}</h5>
                                    <img src={post.img} alt="ai mà biết được" height={300}/>
                                    <div>
                                        <Button>xem chi tiết</Button>
                                    </div>
                                </div>
                                // </Animated>
                            ))
                        }
                </section>
                <section id="chinhtri" className="divv" >
                    <div style={{textAlign: "center"}}><h2>Chính trị</h2></div>
                    {
                        Data.map((post, index) => (
                        // <Animated animationIn="fadeInLeftBig" animationOut="fadeOutRight" key={index} 
                        // animationInDelay={post.id*1000} animationOutDelay={post.id*10}
                        // animationInDuration={post.id*1000} animationOutDuration={post.id*1000} 
                        // isVisible={anime} >
                            <div className="box2 text-center d-flex flex-column box-width-1" >
                                <span class="date">{post.date}</span>
                                <h3>{post.title}</h3>
                                <h5>{post.description}</h5>
                                <img src={post.img} alt="ai mà biết được" height={300}/>
                                <div>
                                    <Button>xem chi tiết</Button>
                                </div>
                            </div>
                            // </Animated>
                        ))
                    }
                </section>
            </div>
            </Container>
        </div>
    );
}

export default Home;