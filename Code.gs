function generateQRCodeForFiles() {
  var filesFolderId = "1SkUsQwTPMEa2iWxohRHMpPepwQZgDnUk";  // Files folder ID
  var qrFolderId = "1NJj2n9x-cme8_R12y65bkEBT1WssHl20";      // QR Codes folder ID

  var filesFolder = DriveApp.getFolderById(filesFolderId);
  var qrFolder = DriveApp.getFolderById(qrFolderId);

  var files = filesFolder.getFiles();
  
  while (files.hasNext()) {
    var file = files.next();
    var fileId = file.getId();
    var qrFileName = file.getName() + "_QR.png";

    // Skip if QR already exists for this filename
    var existing = qrFolder.getFilesByName(qrFileName);
    if (existing.hasNext()) continue;

    // Make file shareable to open via QR
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    var fileUrl = "https://drive.google.com/file/d/" + fileId + "/view?usp=sharing";

    // Generate QR using a free API
    var qrApi = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(fileUrl);
    var response = UrlFetchApp.fetch(qrApi);

    // Save QR image into the QR Codes folder
    qrFolder.createFile(response.getBlob()).setName(qrFileName);
  }
}
