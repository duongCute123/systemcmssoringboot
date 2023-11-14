import React, { useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const ProgramMetadata = () => {
    useEffect(() => {
        const getVieONProgramMetadata = async () => {
            try {
                const url = 'https://www.vieon.vn/';
                const response = await axios.get(url);
                const $ = cheerio.load(response.data);

                const programs = [];

                // Lặp qua các phần tử chứa thông tin chương trình
                $('.program-item').each((index, element) => {
                    const programId = $(element).data('program-id');
                    const programName = $(element).find('.program-name').text();
                    const imageUrl = $(element).find('.program-image img').attr('src');
                    const category = $(element).find('.program-category').text();
                    const date = $(element).find('.program-date').text();

                    const program = {
                        id: programId,
                        name: programName,
                        image: imageUrl,
                        category: category,
                        date: date
                    };

                    programs.push(program);
                });

                console.log(programs);
            } catch (error) {
                console.log(error);
            }
        };

        getVieONProgramMetadata();
    }, []);

    return <div>Fetching program metadata...</div>;
};

export default ProgramMetadata;