import React, { useRef, useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import * as XLSX from 'xlsx';
import { supOptions, subOptions, miniSubOptions, microSubOptions } from '../../Schemas/cate';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import UploadViewRun from './UploadViewRun';
import CategorySelectorModal from './CategorySelection';
import ExcelJS from 'exceljs';

const UploadProducts = () => {

    const back = () => {
        navigate('/seller-dashboard/add-products-bulk');
    };

    const navigate = useNavigate();
    const learnMore = () => {
        navigate('/guidelines');
    };

    const scrollRef = useRef(null);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.focus();
        }
    }, []);




    //categoryyyy
    const [selectedSupOption, setSelectedSupOption] = useState('');
    const [selectedSubOption, setSelectedSubOption] = useState('');
    const [selectedMiniSubOption, setSelectedMiniSubOption] = useState('');
    const [selectedMicroSubOption, setSelectedMicroSubOption] = useState('');
    const [isSecondSelectEnabled, setIsSecondSelectEnabled] = useState(false);
    const [isThirdSelectEnabled, setIsThirdSelectEnabled] = useState(false);
    const [isFourthSelectEnabled, setIsFourthSelectEnabled] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [marketingValue, setMarketingValue] = useState(0);
    const [categoryPath, setCategoryPath] = useState('');
    const [selectedMicroSubOptions, setSelectedMicroSubOptions] = useState(new Set());


    useEffect(() => {
        setIsSubmitEnabled(selectedSupOption && selectedSubOption && selectedMiniSubOption && selectedMicroSubOption && marketingValue !== 0 && categoryPath !== '');
    }, [selectedSupOption, selectedSubOption, selectedMiniSubOption, selectedMicroSubOption, marketingValue, categoryPath]);


    const handleSupOptionChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedSupOption(selectedOption);
        setIsSecondSelectEnabled(true);
        setIsThirdSelectEnabled(false);
        setIsFourthSelectEnabled(false);
        setSelectedSubOption('');
        setSelectedMiniSubOption('');
        setSelectedMicroSubOption('');
        setMarketingValue(getMarginValue(selectedOption));
    };

    const handleSubOptionChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedSubOption(selectedOption);
        setIsThirdSelectEnabled(true);
        setIsFourthSelectEnabled(false);
        setSelectedMiniSubOption('');
        setSelectedMicroSubOption('');
        setCategoryPath(`${selectedSupOption}/${selectedOption}`);
    };
    const handleMiniSubOptionChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedMiniSubOption(selectedOption);
        setIsFourthSelectEnabled(true);
        setIsFourthSelectEnabled(true);
        setSelectedMicroSubOptions(new Set());
        setCategoryPath(`${selectedSupOption}/${selectedSubOption}/${selectedOption}`);
    };
    const handleMicroSubOptionChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        const selectedSet = new Set(selectedOptions);
        setSelectedMicroSubOptions(selectedSet);

        // Update category path based on selection or fallback to mini option
        if (selectedSet.size > 0) {
            setCategoryPath(
                `${selectedSupOption}/${selectedSubOption}/${selectedMiniSubOption}/${Array.from(selectedSet).join(',')}`
            );
        } else {
            setCategoryPath(`${selectedSupOption}/${selectedSubOption}/${selectedMiniSubOption}`);
        }
    };
    const getMarginValue = (option) => {
        switch (option) {

            case "ConsumerElectronics":
                return 2.5;
            case "FashionAndAccessories":
                return 10;
            case "Automotive":
                return 5;
            case "FoodAndBeverages":
                return 2;
            case "BabyCenter":
                return 5;
            case "BeautyAndFragrances":
                return 2.5;
            case "HomeGardenAndFurniture":
                return 5;
            case "MachineryAndEquipment":
                return 5;
            case "OfficeAndStationery":
                return 3;
            case "PersonalCare":
                return 3;
            case "PetAndAnimalCare":
                return 5;
            case "SportsAndFitness":
                return 5;
            case "Toys":
                return 5;
            case "ToolsAndHomeImprovement":
                return 5;

            default:
                return 0;
        }
    };




    //upload excel
    const [jsonData, setJsonData] = useState([]);

    const [showModal, setShowModal] = useState(false);

    // Function to handle modal open
    const handleBulkUpload = () => {
        setShowModal(true); // Open the modal
    };

    // Function to handle modal close
    const closeModal = () => {
        setShowModal(false); // Close the modal
    };
    const[parentCat,setParentCat]=useState('');
    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheet = workbook.Sheets[workbook.SheetNames[0]];

                const range = XLSX.utils.decode_range(sheet['!ref']);
                range.s.r = 1; // Set starting row to 2rd row
                sheet['!ref'] = XLSX.utils.encode_range(range);

                const jsonData = XLSX.utils.sheet_to_json(sheet);
                const currentTime = new Date();
                const jsonDataWithTime = jsonData.map(item => {
                    const images = [];
                    if (item.imageUrl && item.imageName) {
                        images.push({ url: item.imageUrl, name: item.imageName });
                    }
                    for (let i = 2; i <= 5; i++) {
                        const imageUrlKey = `imageUrl${i}`;
                        const imageNameKey = `imageName${i}`;
                        if (item[imageUrlKey] && item[imageNameKey]) {
                            images.push({
                                url: item[imageUrlKey],
                                name: item[imageNameKey],
                            });
                        }
                    }
                    return {
                        ...item,
                        time: currentTime.toLocaleString(),
                        images: images.length > 0 ? images : [],
                        marketingValue: marketingValue,
                        categoryPath: categoryPath,
                        selectedSupOption: selectedSupOption
                    };
                });
                setJsonData(jsonDataWithTime);
                const savedSingleFormData = JSON.parse(localStorage.getItem('singleFormData')) || [];
                const updatedSingleFormData = [...savedSingleFormData, ...jsonDataWithTime];
                localStorage.setItem('singleFormData', JSON.stringify(updatedSingleFormData));
            };
            reader.readAsArrayBuffer(file);
            alert('File uploaded successfully!');
            threeClick();
        } else {
            alert('Please select a file.');
        }
    };


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCatOpen = () => {
      setIsModalOpen(true); // Open the modal by setting state to true
    };
  
    const handleClose = () => {
      setIsModalOpen(false); // Close the modal by setting state to false
    };

    //download button
    const handleDownload = () => {
        let filename = '';
        switch (selectedSupOption) {

            case "ConsumerElectronics":
                filename = "Ulinkit-template-common.xlsx";
                break;
            case "FashionAndAccessories":
                filename = "Ulinkit-template-common.xlsx";
                break;
            case "Automotive":
                filename = "Automotive.xlsx";
                break;
            case "FoodAndBeverages":
                filename = "FoodAndBeverages.xlsx";
                break;
            case "BabyCenter":
                filename = "BabyCenter.xlsx";
                break;
            case "BeautyAndFragrances":
                filename = "Ulinkit-template-common.xlsx";
                break;
            case "HomeGardenAndFurniture":
                filename = "Ulinkit-template-common.xlsx";
                break;
            case "MachineryAndEquipment":
                filename = "Ulinkit-template-common.xlsx";
                break;
            case "OfficeAndStationery":
                filename = "Ulinkit-template-common.xlsx";
                break;
            case "PersonalCare":
                filename = "Ulinkit-template-common.xlsx";
                break;
            case "PetAndAnimalCare":
                filename = "Ulinkit-template-common.xlsx";
                break;
            case "SportsAndFitness":
                filename = "Ulinkit-template-common.xlsx";
                break;
            case "Toys":
                filename = "Ulinkit-template-common.xlsx";
                break;
            case "ToolsAndHomeImprovement":
                filename = "Ulinkit-template-common.xlsx";
                break;

            default:
                filename = "Ulinkit-template-common.xlsx";
        }

        const link = document.createElement('a');
        link.href = `/src/assets/Template/${filename}`;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

const handleCategory=(value)=>{
    console.log(value);
    setSelectedMicroSubOptions(new Set(value));
}
const handleParentCat=(val)=>{
    setParentCat(val);
    setIsSubmitEnabled(true);
    console.log(val);
}

const downloadExcel = async (category) => {
    const headers = [
      "Category",
      "Product Name",
      "Bullet Points",
      "Availability",
      "Dimension Unit",
      "Sku",
      "Brand Name",
      "Hsn Code",
      "Key Fetures",
      "Key Words",
      "Additional Info",
      "Ingredients",
      "Available Quantity",
      "Unit Price",
      "Sell Price",
      "Min Order Qty",
      "Market Currency",
      "Unit of measure",
      "Size unit",
      "Transportation mode",
      "Is Ready to Ship?",
      "Is Ready to Buy?",
      "Is In Stock?",
      "Carton Length Unit",
      "Carton Width Unit",
      "Carton Height Unit",
      "Carton Weight Unit",
      "Item Dimension Unit",
      "Item Weight Unit",
      "Storage Temperature",
      "Offer private label option",
      "Color",
      "Dangerous Goods",
      "Incoterm",
      "Power Plug Type",
      "Barcode Type",
      "Barcode Exemption Reason",
      "imageUrl1",
      "imageUrl2",
      "imageUrl3",
      "imageUrl4",
      "imageUrl5"
    ];
  
    // Valid values for each field
    const validValues = {
      "Category": Array.from(category), // Example categories
      "Dimension Unit":["M","in","cm"],
      "Size unit": ["KG", "GR", "LB", "LT", "CL", "ML", "Gal", "fl_oz", "Piece", "Carton", "Packet", "Pack", "Box", "Roll"],
      "Market Currency": ["AED", "USD","INR"],
      "Unit of measure": ["KG", "GR", "LB", "LT", "CL", "ML", "Gal", "fl_oz", "Piece", "Carton", "Packet", "Box", "Roll"],
      "Transportation mode": ["Regular", "Food Ambient", "Food Chilled", "Food Frozen"],
      "Is Ready to Ship?": ["Yes", "No"],
      "Is Ready to Buy?": ["Yes", "No"],
      "Availability":["Yes", "No"],
      "Is In Stock?": ["Yes", "No"],
      "Carton Length Unit": ["M","in","cm"],
      "Carton Width Unit": ["M","in","cm"],
      "Carton Height Unit": ["M","in","cm"],
      "Carton Weight Unit": ["Milligrams", "Grams", "Kilograms", "Pounds"],
      "Item Dimension Unit": ["M","in","cm"],
      "Item Weight Unit": ["mg", "g", "Kg", "lbs"],
      "Storage Temperature": ["Dry", "Room Temperature", "Chilled", "Frozen"],
      "Offer private label option": ["Yes", "No"],
      "Color": ["Red", "Blue", "Orange", "Yellow", "Black", "White", "Pink", "Green", "Brown", "Grey", "Purple", "Silver", "Gold", "Beige"],
      "Dangerous Goods": ["Yes", "No"],
      "Incoterm": ["Free Carrier", "Carriage Paid To", "Delivered At Place Unloaded", "Delivered At Place", "Free Alongside Ship", "Free On Board", "Cost And Freight", "Cost Insurance And Freight", "ExWorks"],
      "Power Plug Type": ["Type G", "Type F","Type C","Type B"],
      "Barcode Type": ["ean", "gtin", "upc"],
      "Barcode Exemption Reason": ["This is a generic product", "", "Product does not have Standard Identifier Number"]
    };
  
    const workbook = new ExcelJS.Workbook();
  
    // Add main data sheet
    const mainSheet = workbook.addWorksheet("MainSheet");
  
    // Set main sheet column headers with formatting
    const mainHeaderRow = mainSheet.getRow(1);
    mainHeaderRow.font = { bold: true, color: { argb: '3770bf' } }; // Bold and white text color
    mainHeaderRow.fill = { type: 'pattern', pattern: 'solid', bgColor: { argb: 'fc7927' } }; // Blue background color
    mainHeaderRow.height = 30; // Set row height
    headers.forEach((header, index) => {
      const cell = mainHeaderRow.getCell(index + 1);
      cell.value = header;
      cell.font = { bold: true, color: { argb: 'fc7927' } }; // Red font color
      cell.alignment = {
        vertical: 'middle',
        horizontal: 'center'
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '2E75B6' } };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      const width = header.length < 12 ? 20 : header.length+10;
      mainSheet.getColumn(index + 1).width = width;
      // Add padding to the cell (adjust values as needed)
      cell.alignment = {
        vertical: 'middle',
        horizontal: 'center',
        wrapText: true,
        indent: 1,
        textRotation: 0
      };
    });

    mainSheet.getCell(2, 250).value = parentCat;
  
  
    // Iterate over each column to apply data validation
    headers.forEach((header, columnIndex) => {
      const values = validValues[header];
      if (values) {
        // Construct the joined dropdown list
        const joinedDropdownList = '"' + values.join(',') + '"';
        
        // Apply data validation to each cell in the column
        for (let i = 2; i < 100; i++) { // Assuming the data starts from row 2
          const cell = mainSheet.getCell(i, columnIndex + 1);
          cell.dataValidation = {
            type: 'list',
            allowBlank: true,
            formulae: [joinedDropdownList]
          };
        }
      }
    });
  
    // Add ValidValues sheet
    const validValuesSheet = workbook.addWorksheet("ValidValues");
    let rowNumber = 1;
  
    // Add column headers in the first row with specified styling
    const headerRow = validValuesSheet.getRow(rowNumber);
    let k = 0; // Initialize k to 0 for the first column
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      if (validValues[header]) { // Check if header is present in validValues
        const cell = headerRow.getCell(k + 1);
        cell.value = header;
        cell.font = { bold: true, color: { argb: 'fc7927' } };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '2E75B6' } };
        const width = header.length < 12 ? 12 : header.length;
        validValuesSheet.getColumn(k + 1).width = width;
        // Increment k for the next column
        k++;
      }
    }
  
    // // Populate the valid values for each header
    // const maxValuesCount = Math.max(...Object.values(validValues).map(arr => arr.length));
    // for (let i = 0; i < maxValuesCount; i++) {
    //   let k = 0; // Initialize k to 0 for the first column
    //   Object.entries(validValues).forEach(([header, values]) => {
    //     if (values[i]) {
    //       const cell = validValuesSheet.getCell(rowNumber + i + 1, k + 1);
    //       cell.value = values[i];
    //       cell.font = { bold: true };
    //       k++; // Increment k for the next column
    //     }
    //   });
    // }

    Object.entries(validValues).forEach(([header, values], colIndex) => {
        validValuesSheet.getCell(1, colIndex + 1).value = header;
        values.forEach((value, rowIndex) => {
            const cell= validValuesSheet.getCell(rowIndex + 2, colIndex + 1);
            cell.value = value;
            cell.font = { bold: true };

        });

    });
  
  
    // Write workbook to buffer
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  
    const fileName = "Product_template.xlsx";
    const href = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
  
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(href);
  };

  


    return (
        <div className='flexcol seller-home-cont' style={{ gap: '20px' }}>
            <Helmet>
                <title>Add Multiple Products | Ulinkit - Bulk Upload Your Inventory</title>
                <meta name="description" content="Bulk upload multiple products to your Ulinkit store. Efficiently add new items, update details, and manage your inventory with our streamlined tools for mass product addition." />
                <link rel="canonical" href="https://www.ulinkit.com/seller-dashboard/upload-products-bulk" />
            </Helmet>
            <div className="heading flex"><ArrowBackIosNewIcon style={{ cursor: 'pointer' }} onClick={back} />&nbsp;&nbsp;Upload Products</div>
            <div className="flex seller-home">
                <div className="flexcol shone">

                    <div className="sel-box2">
                        <p className="heading3">1. Select categories</p>
                        <p className="heading2">
                            After selecting categories, please download and fill the template below.
                        </p>
                        <div className="flex">
                            <button onClick={handleCatOpen}>
                                select cat
                            </button>
                            <CategorySelectorModal modal={isModalOpen} closeModal={handleClose} setCategory={handleCategory} setParent={handleParentCat} />
                            <select onChange={handleSupOptionChange} >
                                <option value="">Select an option</option>
                                {supOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option.length > 15 ? `${option.substring(0, 15)}...` : option}
                                    </option>
                                ))}
                            </select>
                            <select onChange={handleSubOptionChange} >
                                <option value="">Select a sub option</option>
                                {subOptions[selectedSupOption] && subOptions[selectedSupOption].map((option, index) => (
                                    <option key={index} value={option}> {option.length > 15 ? `${option.substring(0, 15)}...` : option}</option>
                                ))}
                            </select>
                            <select onChange={handleMiniSubOptionChange} >
                                <option value="">Select minisub option</option>
                                {miniSubOptions[selectedSubOption] && miniSubOptions[selectedSubOption].map((option, index) => (
                                    <option key={index} value={option}> {option.length > 15 ? `${option.substring(0, 15)}...` : option}</option>
                                ))}
                            </select>
                            
                                <select onChange={handleMicroSubOptionChange} multiple>
                                    <option value="">Select micro-sub option</option>
                                    {microSubOptions[selectedMiniSubOption] &&
                                        microSubOptions[selectedMiniSubOption].map((option, index) => (
                                            <option key={index} value={option}>
                                                {option.length > 15 ? `${option.substring(0, 15)}...` : option}
                                            </option>
                                        ))}
                                </select>
                            
                        </div>
                        <div className='flexcol-start' style={{ fontSize: '11px', gap: '5px', color: 'green' }}>
                            <div>{errorMessage ? errorMessage : isSubmitEnabled ? `Selected path: ${categoryPath}` : 'Please make all selections'}</div>
                            <div>{selectedSupOption && `Marketing value: ${marketingValue}%`}</div>
                        </div>
                    </div>
                    <div className="sel-box2">
                        <p className="heading3">2. Download template</p>
                        <p className="heading2">
                            Download and fill this template.
                        </p>
                        <button disabled={!isSubmitEnabled} onClick={()=>downloadExcel(selectedMicroSubOptions)} className='upBtns' >Download template&nbsp;&nbsp;<DownloadIcon /></button>
                    </div>
                    <div className="sel-box2">
                        <p className="heading3">3. Upload template</p>
                        <p className="heading2">
                            Upload the template here.
                        </p>
                        {/* <input type="file" id="fileInput" disabled={!isSubmitEnabled} style={{ display: 'none' }} onChange={handleUpload} /> */}
                        <button onClick={handleBulkUpload} className='upBtns' >
                            {/* <label htmlFor="fileInput" className='upBtns'> */}
                            Upload template&nbsp;&nbsp;<UploadIcon />
                            {/* </label> */}
                        </button>


                    </div>

                </div>
                <div className="flexcol shtwo" tabIndex={0} ref={scrollRef}>
                    <div className="sel-box2">
                        <div className="heading3 flex"><TipsAndUpdatesIcon />&nbsp;&nbsp;Bulk product update</div>
                        <p className="heading2">
                            Learn how to upload your products and media in bulk by using a template.
                        </p>
                        <div className='download-btn' onClick={learnMore}>Learn more</div>
                    </div>
                </div>

                <UploadViewRun modal={showModal} setModal={setShowModal} closeModal={closeModal} categoryPath={parentCat} triggerSheetDownload={()=>downloadExcel(selectedMicroSubOptions)} />

            </div>
        </div>
    )
}

export default UploadProducts