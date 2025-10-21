import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



const getStoredApps = () => {
    const storedAppsSTR = localStorage.getItem('installedList')
    if (storedAppsSTR) {
        const storedAppData = JSON.parse(storedAppsSTR)
        return storedAppData
    }
    else {
        return [];
    }
}


const addToStoredDB = (id) => {
    const storedAppData= getStoredApps();
    if(storedAppData.includes(id)){
MySwal.fire({
            icon: "error",
            title: "Already Installed!",
            text: "This App is already installed on your device",

        });

       
    }
    else{
        storedAppData.push(id);
        const data=JSON.stringify(storedAppData)
        localStorage.setItem("installedList",data)
    }

}

export {addToStoredDB,getStoredApps}