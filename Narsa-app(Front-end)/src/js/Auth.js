const formlg = document.getElementById('formlg')
window.addEventListener('DOMContentLoaded', () => {
	formlg.addEventListener('submit', async (e) => {
		e.preventDefault();

        try {
            let loginFields = {
                email: formlg.email.value,
                password: formlg.password.value
            }
            console.log(loginFields)
            let loginRes = await axios.post("http://localhost:4001/api/admin/authenticate", loginFields);
            console.log(loginRes)
            let loginDetails = await loginRes.data;
            if (loginDetails.status == true) {
                document.cookie = "AdminC=" + loginDetails.token,
                    location.replace('../Admin/table.html')
            } else {
                console.log("Email or password are incorrect")
            }
        } catch (e) {
            console.error(e);
        }
	})
})