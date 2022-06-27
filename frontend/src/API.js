import axiosInstance from "axios";



const apiSettings = {

createMyModelEntry: async (data) => {
        let form_data = new FormData();
        if (data.image_url)
            form_data.append("image", data.image_url, 
            data.image_url.name);
},

createListing: async (data) => {
    let form_data = new FormData();
    if (data.image_url)
        form_data.append("image", data.image, data.image.name);

const myNewModel = await axiosInstance
        .post(`mymodels/`, form_data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res) => {
            return res;
        }).catch((error) => {
            return error.response;
        });

    if (myNewModel.status === 201) {
        window.location.href = `/mymodels/${myNewModel.data.id}`;
    }
    return myNewModel;
    },
};

export default apiSettings;