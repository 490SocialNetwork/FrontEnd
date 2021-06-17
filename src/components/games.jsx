import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

const Games = () => {
  const [data, setData] = useState([]);

  let start = moment().subtract(3, "days");
  let newDates = Array(7)
    .fill(0)
    .map((_, index) => start.add(1, "days").clone().format("YYYY-MM-DD"));

  async function getData() {
    const arrOfPromises = newDates.map((item) =>
      fetch("https://api-nba-v1.p.rapidapi.com/games/date/" + item, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "64e2465922msh1891c7210eacae3p15993fjsn878089fb0ec1",
          "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .catch((err) => console.log(err))
    );
    return Promise.all(arrOfPromises);
  }

  const getAllGames = async () => {
    let Games = await getData();
    setData(Games);
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <Container>
      {data.length > 0 &&
        newDates.map((item, index) => {
          return (
            <Game>
              <Row>
                <Logo />
                <H2>{newDates[index]}</H2>
                <Logo />
              </Row>
              <Row>
                <H1>{data[index]?.api.games[0].league}</H1>
                <H1> {data[index]?.api.games[0].seasonStage} </H1>
                <H1>{data[index]?.api.games[0].gameId}</H1>
              </Row>
              <Row>
                <Logo src={data[index].api.games[0].hTeam.logo} />
                <H2>{data[index]?.api.games[0].hTeam.fullName}</H2>
                <Score>{data[index]?.api.games[0].hTeam.score.points}</Score>
              </Row>
              <Row>
                <Logo src={data[index]?.api.games[0].vTeam.logo} />
                <H2>{data[index]?.api.games[0].vTeam.fullName}</H2>
                <Score>{data[index]?.api.games[0].vTeam.score.points}</Score>
              </Row>
              {data[index].api.games[0].arena === "" ? (
                <></>
              ) : (
                <Row>
                  <H1>{data[index]?.api.games[0].arena}</H1>
                  <H1>{data[index]?.api.games[0].city}</H1>
                </Row>
              )}
            </Game>
          );
        })}
    </Container>
  );
};

export default Games;

const Container = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

const Game = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 0.5px solid rgba(219, 219, 219, 0.9);
  padding: 10px;
  margin-bottom: 15px;
`;

const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 2px;
  margin-bottom: 5px;
`;

const H2 = styled.h2`
  font-size: 15px;
`;

const H1 = styled.h1`
  font-size: 20px;
`;

const Logo = styled.img`
  height: 25px;
`;

const Score = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
