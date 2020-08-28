import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import collegeImage from "./college.jpg";
import StarRatings from "react-star-ratings";
import Discount from "./Discount";
import Rate from "./Rate";


class App extends React.Component {
  state = {
    items: Array.from({ length: 10 }),
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 10 more records in 3 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 10 })),
      });
    }, 2000);
  };

  render() {
    
    return (
      <div>
        <div style={styles.mainContainer}>
          <div style={styles.headContainer}>
            <p>Colleges in North India....</p>
          </div>
          <div style={styles.leftContainer}>
            <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {this.state.items.map((i, index) => (
                <div style={styles.style}>
                  <div style={styles.imageContainer}>
                    <img
                      style={{ height: 150, width: "100%", opacity: 0.3 }}
                      src={collegeImage}
                      alt="College "
                    />
                    <div style={styles.textBlock}>
                      <p style={{ fontSize: 10, margin: 0 }}>
                        <span style={{ fontSize: 14, fontWeight: "bold" }}>
                          3.9
                        </span>
                        /5
                      </p>
                      <p style={{ marginTop: 0, fontSize: 11, margon: 0 }}>
                        Very Good
                      </p>
                    </div>
                    <div style={styles.textBlockBottom}>
                      <p style={{ marginTop: 5, fontSize: 10 }}>
                        Best College 2018
                      </p>
                    </div>
                    <div style={styles.textBlockBottomSecond}>
                      <p style={{ marginTop: 5, fontSize: 10 }}>2kms away</p>
                    </div>
                    <div style={styles.textBlockBottomRight}>
                      <p
                        style={{
                          marginTop: 5,
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        #7 in 260 colleges in north campus
                      </p>
                    </div>
                  </div>
                  <div style={styles.details}>
                    <div style={styles.leftDeails}>
                      <span
                        style={{
                          color: "#3f3b3b",
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Hansraj College Delhi University
                        <span
                          style={{
                            marginLeft: 8,
                            alignItems: "center",
                            alignContent: "center",
                          }}
                        >
                          <StarRatings
                            rating={4}
                            starRatedColor="#424242"
                            numberOfStars={5}
                            starDimension="11px"
                            starSpacing="1px"
                          />
                        </span>
                      </span>
                      <p
                        style={{
                          fontSize: 9,
                          marginTop: 0,
                        }}
                      >
                        Near Vishwavidyalya Metro Station{" "}
                        <span style={styles.greyDetails}>
                          {" "}
                          | 2 Kms away from bus stand
                        </span>
                      </p>
                      <span style={{ marginTop: 0 }}>
                        <span
                          style={{
                            color: "#34b597",
                            fontSize: 9,
                            fontWeight: "bold",
                            marginTop: 0,
                          }}
                        >
                          93% Match :
                        </span>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          2.5kms
                        </span>
                        <span style={styles.greyDetails}>from GTB Nagar,</span>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          7kms
                        </span>
                        <span style={styles.greyDetails}>
                          {"  "}from Rajiv Chowk{" "}
                        </span>
                      </span>
                      <p
                        style={{
                          background: "#cdf5e8",
                          borderTopRightRadius: 10,
                          borderBottomRightRadius: 10,
                          marginTop: 6,
                          alignItems: "center",
                        }}
                      >
                        <span style={styles.greyDetails}> Flat </span>
                        <span style={{ fontSize: 9, fontWeight: "bold" }}>
                          Rs.
                        </span>
                        <span
                          style={{
                            color: "#34b597",
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          2000{" "}
                        </span>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          off + upto Rs{" "}
                        </span>
                        <span
                          style={{
                            color: "#34b597",
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          500
                        </span>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          wallet! to avail. . .{" "}
                        </span>
                        <span
                          style={{
                            color: "#4c9aaf",
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          LOGIN
                        </span>
                      </p>
                    </div>
                    <div style={styles.rightDetails}>
                    <div
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          display: "flex",
                          contentAlign:'right',
                          justifyContent:'space-between'
                        }}
                      >
                        <Rate />
                        <Discount />
                      </div>
                      <span
                        style={{
                          color: "#de1621",
                          fontSize: 17,
                          fontWeight: "bold",
                          marginTop: 0,
                        }}
                      >
                        {" "}
                        ₹ 5,768
                      </span>
                      <p
                        style={{
                          fontSize: 8,
                          marginTop: 0,
                        }}
                      >
                        per Semester (3months)
                      </p>
                      <p
                        style={{
                          color: "#34b597",
                          fontSize: 9,
                          fontWeight: "bold",
                        }}
                      >
                        Free Cancellation . Free Wi-Fi
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          </div>

          {/* Right Container  */}

          <div style={styles.rightContainer}>
            <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {this.state.items.map((i, index) => (
                <div style={styles.style}>
                  <div style={styles.imageContainer}>
                    <img
                      style={{ height: 150, width: "100%", opacity: 0.3 }}
                      src={collegeImage}
                      alt="College "
                    />
                    <div style={styles.textBlock}>
                      <p style={{ fontSize: 10, margin: 0 }}>
                        <span style={{ fontSize: 14, fontWeight: "bold" }}>
                          3.9
                        </span>
                        /5
                      </p>
                      <p style={{ marginTop: 0, fontSize: 11, margon: 0 }}>
                        Very Good
                      </p>
                    </div>
                    <div style={styles.textBlockBottom}>
                      <p style={{ marginTop: 5, fontSize: 10 }}>
                        Best College 2018
                      </p>
                    </div>
                    <div style={styles.textBlockBottomSecond}>
                      <p style={{ marginTop: 5, fontSize: 10 }}>2kms away</p>
                    </div>
                    <div style={styles.textBlockBottomRight}>
                      <p
                        style={{
                          marginTop: 5,
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        #7 in 260 colleges in north campus
                      </p>
                    </div>
                  </div>
                  <div style={styles.details}>
                    <div style={styles.leftDeails}>
                      <span
                        style={{
                          color: "#3f3b3b",
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Hansraj College Delhi University
                        <span
                          style={{
                            marginLeft: 8,
                            alignItems: "center",
                            alignContent: "center",
                          }}
                        >
                          <StarRatings
                            rating={4}
                            starRatedColor="#424242"
                            numberOfStars={5}
                            starDimension="11px"
                            starSpacing="1px"
                          />
                        </span>
                      </span>
                      <p
                        style={{
                          fontSize: 9,
                          marginTop: 0,
                        }}
                      >
                        Near Vishwavidyalya Metro Station{" "}
                        <span style={styles.greyDetails}>
                          {" "}
                          | 2 Kms away from bus stand
                        </span>
                      </p>
                      <span style={{ marginTop: 0 }}>
                        <span
                          style={{
                            color: "#34b597",
                            fontSize: 9,
                            fontWeight: "bold",
                            marginTop: 0,
                          }}
                        >
                          93% Match :
                        </span>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          2.5kms
                        </span>
                        <span style={styles.greyDetails}>from GTB Nagar,</span>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          7kms
                        </span>
                        <span style={styles.greyDetails}>
                          {"  "}from Rajiv Chowk{" "}
                        </span>
                      </span>
                      <p
                        style={{
                          background: "#cdf5e8",
                          borderTopRightRadius: 10,
                          borderBottomRightRadius: 10,
                          marginTop: 6,
                          alignItems: "center",
                        }}
                      >
                        <span style={styles.greyDetails}> Flat </span>
                        <span style={{ fontSize: 9, fontWeight: "bold" }}>
                          Rs.
                        </span>
                        <span
                          style={{
                            color: "#34b597",
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          2000{" "}
                        </span>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          off + upto Rs{" "}
                        </span>
                        <span
                          style={{
                            color: "#34b597",
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          500
                        </span>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          wallet! to avail. . .{" "}
                        </span>
                        <span
                          style={{
                            color: "#4c9aaf",
                            fontSize: 9,
                            fontWeight: "bold",
                          }}
                        >
                          LOGIN
                        </span>
                      </p>
                    </div>
                    <div style={styles.rightDetails}>
                      <div
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          display: "flex",
                          contentAlign:'right',
                          justifyContent:'space-between'
                        }}
                      >
                        <Rate />
                        <Discount />
                      </div>
                      <span
                        style={{
                          color: "#de1621",
                          fontSize: 17,
                          fontWeight: "bold",
                          marginTop: 0,
                        }}
                      >
                        {" "}
                        ₹ 5,768
                      </span>
                      <p
                        style={{
                          fontSize: 8,
                          marginTop: 0,
                        }}
                      >
                        per Semester (3months)
                      </p>
                      <p
                        style={{
                          color: "#34b597",
                          fontSize: 9,
                          fontWeight: "bold",
                        }}
                      >
                        Free Cancellation . Free Wi-Fi
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  style: {
    flex: 1,
    width: 500,
    height: 255,
    margin: 50,
    borderRadius: 5,
    overflow: "hidden",
    boxShadow: "1px 1px 2px 1px #bfbdbd",
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "black",
  },
  textBlock: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#f5a821",
    color: "white",
    paddingLeft: "8px",
    paddingRight: "8px",
    textAlign: "center",
    borderRadius: 5,
  },
  textBlockBottom: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    backgroundColor: "white",
    color: "grey",
    paddingLeft: "15px",
    paddingRight: "15px",
    textAlign: "center",
    borderRadius: 15,
  },
  textBlockBottomSecond: {
    position: "absolute",
    bottom: "10px",
    left: "130px",
    backgroundColor: "white",
    color: "grey",
    paddingLeft: "15px",
    paddingRight: "15px",
    textAlign: "center",
    borderRadius: 15,
  },
  textBlockBottomRight: {
    position: "absolute",
    bottom: "10px",
    right: "-5px",
    color: "white",
    paddingLeft: "15px",
    paddingRight: "15px",
    textAlign: "center",
    borderRadius: 15,
  },
  headContainer: {
    flex: 1,
    marginLeft: 50,
  },
  mainContainer: {
    flex: 1,
    marginLeft: 50,
  },
  leftContainer: {
    float: "left",
  },
  rightContainer: {
    flex: 1,
    float: "right",
    marginRight: 70,
  },
  image: {
    flex: 1,
    height: "60%",
  },
  details: {
    height: "39%",
    width: "99.2%",
    flex: 1,
  },
  leftDeails: {
    float: "left",
    marginLeft: 15,
  },
  rightDetails: {
    flex: 1,
    textAlign: "right",
    height: "100%",
    float: "right",
    marginRight: 15,
  },
  lineOverText: {
    textDecoration: "line-through",
    fontSize: 10,
  },
  greyDetails: {
    color: "grey",
    fontSize: 9,
  },
};

export default App;
