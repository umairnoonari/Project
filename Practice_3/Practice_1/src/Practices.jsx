export const Practices=()=>{
    const students=[]
    return<div>
        <p>{students.length && "No students Found"}</p>
        {/* <p>{students.length===0 && "No students Found"}</p> */}
        {/* <p>{!students.length && "No students Found"}</p> */}
        {/* <p>{!Boolean(students.length) && "No students Found"}</p> */}
        <p>Number of students:{students.length}</p>
    </div>
}
