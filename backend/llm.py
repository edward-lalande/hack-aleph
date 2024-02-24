from typing import Any, List, Mapping, Optional

from langchain.callbacks.manager import CallbackManagerForLLMRun
from langchain.llms.base import LLM
import requests

API_BASE = "https://curated.aleph.cloud/vm/a8b6d895cfe757d4bc5db9ba30675b5031fe3189a99a14f13d5210c473220caf"

class Libertai(LLM):
    api_base: str = API_BASE
    temperature: float = 0.9
    top_p: float = 1
    top_k: int = 40
    cache_prompt: bool = True
    max_length: int = 400
    slot_id: int = -1
    session: requests.Session = None
    stop: list = ["<|"]

    @property
    def _llm_type(self) -> str:
        return "custom"

    def _call(
        self,
        prompt: str,
        stop: Optional[List[str]] = None,
        run_manager: Optional[CallbackManagerForLLMRun] = None,
        **kwargs: Any,
    ) -> str:
        """Call the LLM."""
        if self.session is None:
            self.session = requests.Session()

        params = {
            "prompt": prompt,
            "temperature": self.temperature,
            "top_p": self.top_p,
            "top_k": self.top_k,
            "n": 1,
            "n_predict": self.max_length,
            "stop": stop or self.stop,
            "slot_id": self.slot_id,
            "cache_prompt": True
        }

        response = requests.post(f"{self.api_base}/completion", json=params)
        if response.status_code == 200:
            output = response.json()
            self.slot_id = output['slot_id']
            return output['content']
        else:
            return None

    @property
    def _identifying_params(self) -> Mapping[str, Any]:
        """Get the identifying parameters."""
        return {
            "api_base": self.api_base,
            "temperature": self.temperature,
            "top_p": self.top_p,
            "top_k": self.top_k,
            "cache_prompt": self.cache_prompt,
            "max_length": self.max_length,
            }

openhermes = Libertai(api_base=API_BASE)
