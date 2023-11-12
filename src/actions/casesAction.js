import api from '../services/Axios';
import apiCoreExtention from '../services/AxiosCoreExtention';
import Cookie from '../utils/Cookie';
// // import header from '../utils/headerToken'

//Create/Update CasesApi
export const CreateCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/case`, payload, header).then(response => response)
    .catch(err => err);
};

export const CreateCasesForMacSettingsApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return apiCoreExtention.post(`v2/controller/case/save-case`, payload, header).then(response => response)
    .catch(err => err);
};

//Delete CasesApi
export const DeleteCasesApi = (id) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.delete(`controller/case/${id}`, header).then(response => response)
    .catch(err => err);
};

//List of CasesApi
export const ListOfCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/case/list`, payload, header).then(response => response)
    .catch(err => err);
};

//List of CasesApi
export const ListOfCasesForCoreExtensionApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return apiCoreExtention.post(`v2/controller/case/list`, payload, header).then(response => response)
    .catch(err => err);
};

//Get of CasesApi
export const GetCasesApi = (id) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.get(`controller/case/${id}`, header).then(response => response)
    .catch(err => err);
};

//Get of CasesApi
export const GetCasesFromMacSettingsApi = (id) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return apiCoreExtention.get(`v2/controller/case/${id}`, header).then(response => response)
    .catch(err => err);
};

//Update People CasesApi
export const AddPeopleToCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/case/people`, payload, header).then(response => response)
    .catch(err => err);
};

//Log of CasesApi
export const LogsOfCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/caseDetails/list`, payload, header).then(response => response)
    .catch(err => err);
};

//Log of CasesApi
export const ChangeImportentCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/caseDetails/pinImportant`, payload, header).then(response => response)
    .catch(err => err);
};

//Disposition For Charges
export const ChangeDispositionForChargesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/charges/updateStatus`, payload, header).then(response => response)
    .catch(err => err);
};

//Create bond Api
export const CreateBondApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/case/saveBondDetails`, payload, header).then(response => response)
    .catch(err => err);
};

//List of CasesApi
export const ListOfUserCasesApi = (id, limit, page, searchKey) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.get(`controller/case/caseListByUser?userId=${id}&limit=${limit}&page=${page}&searchKey=${searchKey}`, header).then(response => response)
    .catch(err => err);
};

//List of CasesApi
export const ListOfUserCasesCoreExtentionApi = (id, limit, page, searchKey) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return apiCoreExtention.get(`v2/controller/case/caseListByUser?userId=${id}&limit=${limit}&page=${page}&searchKey=${searchKey}`, header).then(response => response)
    .catch(err => err);
};

//File of Case Api
export const FilesOfCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/caseDetails/searchFiles`, payload, header).then(response => response)
    .catch(err => err);
};

//List of Cases Api
export const ListOfAdminCasesApi = (id, limit, page, searchKey) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.get(`controller/case/case-list-by-admin?userId=${id}&limit=${limit}&page=${page}&searchKey=${searchKey}`, header).then(response => response)
    .catch(err => err);
};

//List of Cases Api
export const ListOfAdminCasesCoreExtentionApi = (id, limit, page, searchKey) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return apiCoreExtention.get(`v2/controller/case/case-list-by-admin?userId=${id}&limit=${limit}&page=${page}&searchKey=${searchKey}`, header).then(response => response)
    .catch(err => err);
};

//Remove File of Case Api
export const RemoveFilesOfCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.delete(`controller/caseDetails/file/` + payload, header).then(response => response)
    .catch(err => err);
};

//Export logs
export const ExportLogs = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/pdfs/case-logs`, payload, header).then(response => response)
    .catch(err => err);
};
//Export logs
export const ExportLogsPeople = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/pdfs/people-logs`, payload, header).then(response => response)
    .catch(err => err);
};

//Conflict Get Data for case
export const AllCasesExceptPotentialConflictsCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/case/list-conflict`, payload, header).then(response => response)
    .catch(err => err);
};

//Conflict Get Data for case
export const PotentialConflictCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.get(`controller/caseDetails/conflict/` + payload, header).then(response => response)
    .catch(err => err);
};

//Declare Conflict
export const DeclareConflictCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/caseDetails/conflict`, payload, header).then(response => response)
    .catch(err => err);
};

//Revoke Conflict
export const RevokeConflictCasesApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/caseDetails/conflict/revoke`, payload, header).then(response => response)
    .catch(err => err);
};

export const GetImportantNotes = (caseId) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.get(`controller/caseDetails/note/list?caseId=${caseId}`, header).then(response => response)
    .catch(err => err);
};

export const GetFileUrlApi = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/aws/file`, payload, header).then(response => response)
    .catch(err => err);
};

export const GenerateFileUploadUrl = (fileName) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.get(`controller/files/get-presigned-upload-url?filePath=${fileName}`, header).then(response => response)
}

export const GenerateFileUploadUrlDocGen = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/docai/get-presigned-gocgen-template-upload-url`, payload, header).then(response => response)
}

export const UploadProfilePicture = (file, fileName) => {
  const formData = new FormData();
  formData.append("logo", fileName);
  formData.append('profilePicture', file);
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}`, 'Content-Type': 'multipart/form-data'}
  }
  return api.post(`controller/files/upload-profile-picture`, formData, header).then(response => response)
}

export const DeleteFile = (fileName) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}`}
  }
  return api.delete(`controller/files/delete-file?filePath=${fileName}`, header).then(response => response)
}

//List of Type
export const ListOfProfileCaseTypeForSettingsApi = ( ) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.get(`controller/userSettings/get-profile-type`, header).then(response => response)
    .catch(err => err);
};

export const UpdateCaseStageAndStatus = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/case/update-status-and-stage`, payload, header).then(response => response)
    .catch(err => err);
};

export const UpdateCaseStageAndStatusCoreExtension = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return apiCoreExtention.post(`v2/controller/case/update-status-and-stage`, payload, header).then(response => response)
    .catch(err => err);
};

export const GenerateCaseCheckList = (id) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.get(`controller/case/case-checklist-report/${id}`, header).then(response => response)
    .catch(err => err);
};

export const UpdateNotRequiredReason = (payload) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.post(`controller/case/add-case-checklist-response`, payload, header).then(response => response)
    .catch(err => err);
};

export const UndoCaseCheckListReason = (id) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  } 
  return api.delete(`controller/case/delete-case-checklist-response/${id}`, header).then(response => response)
    .catch(err => err);
};

export const resyncEmails = (id) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  } 
  return api.get(`controller/caseDetails/re-sync-email-log?caseId=${id}`, header).then(response => response)
    .catch(err => err);
};
//Get of CasesApi
export const GetNextCourtDateCasesApi = (id) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return api.get(`controller/case/get-next-court-date/${id}`, header).then(response => response)
    .catch(err => err);
};

//Get of Case Type
export const GetCaseTypeFromMacSettingsApi = (id) => {
  const header = {
    headers: { 'Authorization': `Bearer ${Cookie.getCookie('_tokenZealous')}` }
  }
  return apiCoreExtention.get(`v2/controller/case/permitted-case-type`, header).then(response => response)
    .catch(err => err);
};