import { useEffect, useState } from 'react';
import resourceService from '../services/service';

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  const create = async (resource) => {
    try {
      const response = await resourceService.createNew(baseUrl, resource);

      setResources(resources.concat(response));
    } catch (error) {
      console.log(error);
    }
  };

  const getAll = async () => {
    try {
      const dataArray = await resourceService.getAll(baseUrl);

      setResources(dataArray);
    } catch (error) {
      console.log(error);
    }
  };

  const service = {
    create,
    getAll,
  };

  useEffect(() => {
    async function fetchData() {
      const dataArray = await resourceService.getAll(baseUrl);
      setResources(dataArray);
    }

    fetchData();
  }, []);

  return [resources, service];
};

export default useResource;
