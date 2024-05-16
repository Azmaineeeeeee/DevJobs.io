import { useContext, useEffect, useState } from "react";
import { Context } from "../Providers/AuthProviders";

import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const AppliedJobs = () => {
  const { user } = useContext(Context);
  const [AppliedJobsData, setAppliedJobsData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/myapplications/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAppliedJobsData(data);
      });
  }, [user]);
  const styles = StyleSheet.create({
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: { 
      flexDirection: "row", 
      width: "100%", 
      borderBottomWidth: 1, 
      borderStyle: "solid", 
      borderColor: "#000", 
    },
    tableHeaderCell: { 
      margin: "auto", 
      marginTop: 5, 
      marginBottom: 5, 
      marginLeft: 5, 
      marginRight: 5, 
      width: "14.285%", 
      borderStyle: "solid", 
      borderColor: "#000", 
      borderTopWidth: 1, 
      borderLeftWidth: 1, 
      borderRightWidth: 0, 
      borderBottomWidth: 0, 
    },
    tableHeaderText: { 
      fontWeight: "bold", 
    },
    tableCell: { 
      margin: "auto", 
      marginTop: 5, 
      marginBottom: 5, 
      marginLeft: 5, 
      marginRight: 5, 
      width: "14.285%", 
      borderStyle: "solid", 
      borderColor: "#000", 
      borderTopWidth: 1, 
      borderLeftWidth: 1, 
      borderRightWidth: 0, 
      borderBottomWidth: 0, 
    },
  });
  const MyDocument = () => (
  
    <Document>
      <Page size="A4">
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>#</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>Job Title</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>Company Name</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>Job Type</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>Email</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>Name</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>Resume</Text>
            </View>
          </View>
          {AppliedJobsData.map((data, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCell}>
                <Text>{index + 1}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{data.job_title}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{data.posted_by}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{data.job_type}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{data.email}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{data.name}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{data.resume}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <div className="flex flex-col gap-6 items-center mt-4">
        <h1 className="text-center text-3xl font-medium text-purple-700">
          See all of your applied job listing
        </h1>
        <div className="bg-white shadow-2xl">
          <div className="max-w-md p-4 sm:flex sm:space-x-6">
            <div className="flex-shrink-0 w-full  h-36 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src={user.photoURL}
                alt=""
                className="object-cover object-center w-28 h-28 rounded"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl text-slate-800 font-semibold">
                  {user.displayName}
                </h2>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Email address"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                    ></path>
                  </svg>
                  <span className="text-slate-600">{user.email}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
       
          <PDFDownloadLink document={<MyDocument />} fileName="applied_jobs.pdf">
          {({ loading }) => (loading ? 'Loading PDF...' : <button className="btn btn-outline btn-error py-0">
          Download Applied Job List
        </button>)}
        </PDFDownloadLink>
      </div>
      <div className="overflow-x-auto mt-4 p-6">
        <table className="table table-xl border-b-2 border-t-2 border-cyan-800 ">
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Job Type</th>
              <th>Email</th>
              <th>Name</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {AppliedJobsData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>{data.job_title}</td>
                <td>{data.posted_by}</td>
                <td>{data.job_type}</td>
                <td>{data.email}</td>
                <td>{data.name}</td>
                <td>{data.resume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
