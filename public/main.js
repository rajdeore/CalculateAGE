function calculate() {
    let fileInput = document.getElementById('myfile');

    let file = fileInput.files[0];
    console.log(file);


    const reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = function (file) {
        const content = file.target.result;
        document.getElementById('contentinfile').textContent = content;
        //alert(`Number of character in the file : ${content}`);
        //const characterCount = content.length;
        let datetemp = content;
        let result = "";
        let Allrecords = datetemp.split('\n');

        //datetemp = (content.match("[0-9]{2}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{4}")[0])
        //document.getElementById('output').textContent =
        // calDOB('19/01/1996');
        for (let i = 0; i < Allrecords.length; i++) {
            let record = Allrecords[i].split(" ");
            let recorddate = record[1];

            Allrecords[i] = Allrecords[i].concat(" ", calDOB(recorddate));
            result = result.concat('\n', Allrecords[i])
        }
        console.log(result);

        document.getElementById('output').textContent = result;


        //alert(`Number of character in the file : ${characterCount}`);
    };

    reader.readAsText(file);
};

function calDOB(dateString) {
    var today = new Date();
    // var birthDate = new Date(dateString);
    let birthday = dateString.substring(0, 2)
    let birthmonth = dateString.substring(3, 5)
    let birthyear = dateString.substring(6, 10)
    var age = today.getFullYear() - birthyear;
    var m = today.getMonth() - birthmonth;
    if (m < 0 || (m === 0 && today.getDate() < birthday)) {
        age--;
    }
    return age;
};
