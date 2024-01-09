// Замените slideTemplateId на фактический идентификатор файла
const slideTemplateId = "PRESENTATION_ID"; // "PRESENTATION_ID";
const key = "KEY-ID";
const md5sum = "7b70bd59884a8fb0e8b6ea3c3daac46e";
const fileUrl =
    "https://drive.google.com/uc?export=download&id=PRESENTATION_ID";

function setFields() {
    const apiUrl = "http://Localhost:8085/api/v2/fill";

    const data = {
        Name: "John",
        Address: "My address2",
    };

    const payload = {
        method: "post",
        contentType: "application/x-www-form-urlencoded",
        muteHttpExceptions: true,
        payload: {
            data: JSON.stringify(data),
            fileUrl: fileUrl,
            md5sum: md5sum,
            key: key,
        },
    };

    const response = UrlFetchApp.fetch(apiUrl, payload);

    // Обрабатываем ответ сервера
    const responseData = response.getContentText();
    Logger.log(responseData);
}

function getFields() {
    const apiUrl = "http://Localhost:8085/api/v2/fields";

    const encodedUrl = encodeURIComponent(fileUrl);

    // Конструируем URL с параметрами
    const urlWithParams = `${apiUrl}?fileUrl=${encodedUrl}&md5sum=${md5sum}&key=${key}`;

    Logger.log(urlWithParams);

    const params = {
        method: "get",
        muteHttpExceptions: true, // Для отладки, чтобы не подавлять исключения HTTP
    };

    // Делаем GET-запрос
    const response = UrlFetchApp.fetch(urlWithParams, params);

    // Обрабатываем ответ сервера
    const responseData = response.getContentText();
    Logger.log(responseData);
}
