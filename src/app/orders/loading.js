// this is the loading part for the tables
export default function Loading(){
    return(
        <div className="space-y-2">
            {
                Array.from(
                    {length : 5}
                ).map(
                    (_ , i) =>  (
                        <div key={i} className="h-10 bg-slate-200 animate-pulse"></div>

                        )
                    // the loading shld be the same as the structure of the table
                )
            }
        </div>
    )
}