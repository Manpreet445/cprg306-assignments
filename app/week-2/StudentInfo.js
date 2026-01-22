import Link from 'next/link';

export default function StundentInfo(){
    return(
        <div>
            <p>Name - Manpreet Singh</p>
            <p>
              Github - <Link href="https://github.com/Manpreet445/cprg306-assignments" style={{ textDecoration: 'underline' }}>manpreet/cprg306-assignments</Link>
            </p>
        </div>
    );
}