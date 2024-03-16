import Link from 'next/link';

const DownloadCv = () => {
  return (
    <div className="flex justify-center items-center mt-40">
      <Link legacyBehavior href="/cv/Curriculum-english-version.pdf">
        <a target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Dowload CV
        </a>
      </Link>
    </div>
  );
};

export default DownloadCv;
