import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  Button,
  TextField,
  Tooltip,
  Backdrop,
  CircularProgress,
  Alert,
  Typography,
  Box,
} from "@mui/material";
import ExcelJS from "exceljs";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, bulkUpload } from '../../../Redux/addProductSlice';
// import BASE_URL from "./config";
// import "../css/UploadView.css";

const initialResponseData = {
  fileErrorList: [],
  downloadUri: "",
  updated: 0,
  total: 0,
  totalInSheet: 0,
  errors: 0,
  duplicateInSheet: 0,
};

const BASE_URL='';

const UploadView = ({
  fileName,
  onUploadStatusChange,
  shouldTriggerDownload,
  resetTriggerDownload,
  triggerUploadSheet,
  category
}) => {
  const [file, setFile] = useState(null);
  const [statesOfIndia, setStatesOfIndia] = useState([]);
  const [selectedStateCard, setSelectedStateCard] = useState("");
  const [uploading, setUploading] = useState(false);
  const [responseData, setResponseData] = useState(initialResponseData);
  const [fileError, setFileError] = useState("");
  const [success, setSuccess] = useState(false);
  const user = useSelector((state) => state.auth.user);

  //drag and drop
  const dispatch = useDispatch();
  // Common styles
  const alertStyles = {
    maxWidth: "100px",
    minWidth: "100px",
    minHeight: "100px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: "5px",
  };

  useEffect(() => {
    const storedStates = JSON.parse(sessionStorage.getItem("circle")) || [];
    setStatesOfIndia(storedStates);
  }, []);

  useEffect(() => {
    onUploadStatusChange("null");
    setResponseData(initialResponseData);
  }, [selectedStateCard]);

  useEffect(() => {
    if (shouldTriggerDownload) {
      handleExportClick();
      resetTriggerDownload();
    }
  }, [shouldTriggerDownload]);

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const allowedExtensions = ["xls", "xlsx"];
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        setFileError("");
      } else {
        setFileError(`Allowed file types: ${allowedExtensions.join(", ")}`);
        e.target.value = null;
      }
    }
  };

  const downloadExcel = async () => {
  
    triggerUploadSheet();
    console.log(category);
  };

  const handleApi = async () => {
    if (!file) return;  // Exit if no file is selected
    setUploading(true);  // Start uploading state
  
    try {
      const formData = new FormData();
      formData.append("file", file);  
      // Dispatch the action to upload the file
      const response = await dispatch(bulkUpload({formData,category}));
      const data = response?.payload || {};  // Ensure data is defined, otherwise fall back to an empty object
  console.log(response);
      if (response?.type === 'product/bulkUpload/fulfilled') {
        setResponseData({
          ...initialResponseData,
          fileErrorList: data?.fileErrorList || [],  // Default to an empty array if fileErrorList is undefined
          downloadUri: data?.downloadUri || '',  // Default to empty string if downloadUri is undefined
          updated: data?.updatedRecords || 0,  // Default to 0 if updatedRecords is undefined
          total: data?.totalRecords || 0,  // Default to 0 if totalRecords is undefined
          totalInSheet: data?.totalRecordInSheet || 0,  // Default to 0 if totalRecordInSheet is undefined
          errors: data?.errors || 0,  // Default to 0 if errors is undefined
          duplicateInSheet: data?.duplicate || 0,  // Default to 0 if duplicate is undefined
        });
      }

      console.log(responseData);
  
      // Safely check conditions for status
      const status = data?.fileErrorList?.length === 0 &&
        (data?.updatedRecords > 0 || data?.newRecords > 0)
        ? "success"
        : "error";
  
      onUploadStatusChange(status);  // Update the upload status
      setSuccess(true);  // Set success state after upload is complete
    } catch (err) {
      console.error(err);  // Handle errors
    } finally {
      setUploading(false);  // Reset the uploading state after process is complete
    }
  };
  

  const handleExportClick = () => {
    const { downloadUri } = responseData;
    if (downloadUri) {
      const link = document.createElement("a");
      link.href = `${BASE_URL}/downloadFile/${downloadUri}`;
      link.download = "response.xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const renderUploadButton = () => (
    <Tooltip
     
    >
      <Button
        type="button"
        onClick={() => {
          handleApi();
        //   setSucess(false);
        }}
        disabled={!file || fileError}
        sx={{
          "&:disabled": {
            backgroundColor: "#cccccc",
          },
          "&:hover": {
            backgroundColor: "#ff6347ba",
          },
          background: "tomato",
          maxWidth: "max-content",
          marginLeft: "320px",
          marginTop: "5px",
          color: "white",
        }}
      >
        Upload
      </Button>
    </Tooltip>
  );

  const renderBackdrop = () => (
    <Backdrop open={true} style={{ zIndex: 999999 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <CircularProgress color="inherit" />
        <p>Uploading...</p>
      </div>
    </Backdrop>
  );

  const renderAlerts = () => {
    const alertData = [
      { key: "newEntry", label: "New Records", severity: "success" },
      { key: "updated", label: "Updated Records", severity: "warning" },
      { key: "errors", label: "Error in Records", severity: "error" },
      { key: "duplicateInSheet", label: "Total Duplicate", severity: "warning" },
      { key: "total", label: `Total Records for ${selectedStateCard}`, severity: "info" },
      { key: "totalInSheet", label: "Total Records in Sheet", severity: "info" },
    ];

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "5px",
        }}
      >
        {alertData.map((item) => (
          <Alert
            key={item.key}
            severity={item.severity}
            icon={false}
            sx={{
              maxWidth: "100px",
              minWidth: "100px",
              minHeight: "100px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              top: "5px",
            }}
          >
            <Box sx={{ borderBottom: "1px solid white", minHeight: "50px", paddingBottom: "10px" }}>
              <Typography>{item.label}</Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center", paddingTop: "10px" }}>
                {responseData[item.key] || 0}
              </Typography>
            </Box>
          </Alert>
        ))}
      </Box>
    );
  };


  const generateRandomRows = (numRows) => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push({
        id: i,  // Unique id for each row
        name: `Name ${i + 1}`,
        age: Math.floor(Math.random() * 100),  // Random age between 0 and 100
        email: `user${i + 1}@example.com`,
        error: `Error message ${i + 1}`,
      });
    }
    return rows;
  };

  const columns = [
    {
      field: "rowNum",
      headerName: "Row No.",
      width: 10,
      headerClassName: "custom-header2",
    },
    {
      field: "errorMsgs",
      headerName: "Error Message",
      flex: 1,
      renderCell: (params) => {
        const rowData = params.row;
        return (
          <Tooltip title={rowData.errorMsgs} placement="top-start">
            <div>{rowData.errorMsgs}</div>
          </Tooltip>
        );
      },
      headerClassName: "custom-header2", // Add a custom CSS class to the header
    },
  ];
  // Define random columns
//   const columns = [
//     { field: 'id', headerName: 'ID', width: 150 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'age', headerName: 'Age', width: 100 },
//     { field: 'email', headerName: 'Email', width: 200 },
//     { field: 'error', headerName: 'Error Message', width: 300 },
//   ];
  const renderFileErrorList = () => (
    
    responseData.fileErrorList && responseData.fileErrorList.length > 0 && (
      <div className="data-grid-container">
        <div className="sticky-data-grid">
          <DataGrid
            rows={responseData.fileErrorList.map((row, index) => ({
              ...row,
              id: index,
            }))}
            // rows={generateRandomRows(10)}
            columns={columns}
            pageSize={50}
            pagination
            getRowId={(row) => row.id}
          />
        </div>
      </div>
    )
  );

  return (
    <div className="upload-wrap">
      <div className="container min-vh-100">
        <form>
          <div className="form-group">
           
            <TextField
              type="file"
              accept=".xls,.xlsx"
              error={!!fileError}
              helperText={fileError}
              onChange={handleFile}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Transparent border color for default state
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Transparent border color for active state
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Transparent border color on hover
                  },
                  "&.Mui-error fieldset": {
                    borderColor: "transparent", // Transparent border color for error state
                  },
                },
              }}
              
            />
             
            <Button onClick={downloadExcel}>Download Template</Button>
          </div>
          
          {!uploading ? (
        renderUploadButton()
      ) : (
        renderBackdrop()
      )}

      {success && (
        (responseData.updated > 0 || responseData.newEntry > 0) ? (
          renderAlerts()
        ) : (
          responseData.total > 0 && responseData.fileErrorList <= 0 && (
            renderAlerts()
          )
        )
      )}

      {renderFileErrorList()}

        </form>
       
      </div>
    </div>
  );
};

export default UploadView;
